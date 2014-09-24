define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var API = require('modules/services/api');

    var Item = Backbone.Model.extend({
        urlRoot : function() {
            return API.item;
        },
        defaults: {
            name: '',
            date: '',
            artist: '',
            country: '',
            condition: '',
            cost: '',
            value: '',
            width: '',
            height: '',
            weight: '',
            diameter: '',
            lastUpdated: '',
            base64Image: ''
        }
    });

    return Item;
});