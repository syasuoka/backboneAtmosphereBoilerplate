define(function(require) {
    'use strict';

    var BaseLayout = require('modules/core/base-layout');
    var template = require('hbs!modules/layouts/templates/two-row');
    var $ = require('jquery');

    var doc = $(document);

    var TwoRowLayout = BaseLayout.extend({
        template: template,

        afterRender: function() {
        }
    });

    return TwoRowLayout;

});