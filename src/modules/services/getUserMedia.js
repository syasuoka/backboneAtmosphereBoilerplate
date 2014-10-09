define(function() {
    'use strict';
    var gum = {};
    var navigator = window.navigator;

    var strats = gum.strategies = {
        playStream: {
            moz: function(videoElem, stream) {
                videoElem.mozSrcObject = stream;
                videoElem.play();
            },
            webkit: function(videoElem, stream) {
                videoElem.src = gum.URL.createObjectURL(stream);
                videoElem.play();
            }
        },
        stopStream: {
            moz: function(videoElem) {
                if (videoElem.mozSrcObject) {
                    videoElem.mozSrcObject.stop();
                }
                delete videoElem.mozSrcObject;
            },
            webkit: function(videoElem) {
                if (videoElem.stop) {
                    videoElem.stop();
                }
                else {
                    videoElem.pause();
                }
                videoElem.src = '';
            }
        }
    };

    function gotSources(sourceInfos) {
        var videoSources = [];
        var sourceLength = 0;
        if (sourceInfos) {
            sourceLength = sourceInfos.length;
        }
        console.debug(sourceInfos);

        for (var i = 0; i < sourceLength; i++) {
            var videoSource = {};
            var sourceInfo = sourceInfos[i];

            if (sourceInfo.kind === 'video') {
                videoSource = {id: sourceInfo.id, name: 'video ' + i};
                videoSources.push(videoSource);
            }
        }
        gum.videoSources = videoSources;
    }

    // MediaStreamTrack is a global in Chrome, I guess
    if (typeof MediaStreamTrack === 'undefined'){
        console.log('no mediastream track');
        gotSources();
    } else {
        console.log('media stream tracks!!!!');
        MediaStreamTrack.getSources(gotSources);
    }

    // Expose the correct methods according to the environment
    // native API: navigator.getUserMedia(constraints, successCallback, errorCallback);
    gum.URL = window.URL || window.webkitURL;
    gum.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia || null;

    if (gum.getUserMedia) {
        gum.getUserMedia = gum.getUserMedia.bind(navigator);
    }

    if ('mozSrcObject' in document.createElement('video')) {
        gum.playStream = strats.playStream.moz;
        gum.stopStream = strats.stopStream.moz;
    } else {
        gum.playStream = strats.playStream.webkit;
        gum.stopStream = strats.stopStream.webkit;
    }

    gum.setVideoSource = function(videoSourceIndex) {
        var videoSource;
        if (this.videoSources && this.videoSources[videoSourceIndex]) {
            videoSource = this.videoSources[videoSourceIndex].id;
        }
        this.videoSource = videoSource;
    };

    gum.getVideoSources = function() {
        return this.videoSources;
    };

    gum.multiCameraGetUserMedia = function(successCallback, errorCallback) {
        var constraints = {
            video: {
                optional: [{sourceId: gum.videoSource}]
            }
        };

        navigator.getUserMedia(constraints, successCallback, errorCallback);
    };

    return gum;
});
