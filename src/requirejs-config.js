(function() {
    'use strict';

    require.config({
        baseUrl: '/',
        paths: {
            backbone: 'bower_components/backbone/backbone',
            jquery: 'bower_components/jquery/dist/jquery',
            underscore: 'bower_components/lodash/dist/lodash.underscore',
            lodash: 'bower_components/lodash/dist/lodash',
            tmpl: 'bower_components/lodash-template-loader/loader',
            //tmpl: 'bower_components/handlebars/handlebars',
        },

        deps: ['main']
    });
}());
