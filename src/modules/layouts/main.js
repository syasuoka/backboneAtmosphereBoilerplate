define(function(require) {
    'use strict';

    var BaseLayout = require('modules/core/base-layout');
    var template = require('hbs!modules/layouts/templates/main');

    var MainLayout = BaseLayout.extend({
        template: template
    });

    return MainLayout;

});
