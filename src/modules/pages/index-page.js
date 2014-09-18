define(function(require) {
    'use strict';

    var TwoRowLayout = require('modules/layouts/two-row');

    var IndexPage = TwoRowLayout.extend({
        initialize: function() {
        },

        afterRender: function() {
            var self = this;

            TwoRowLayout.prototype.afterRender.apply(this);
        }
    });

    return IndexPage;
});