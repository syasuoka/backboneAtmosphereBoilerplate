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
            hbs: 'bower_components/require-handlebars-plugin/hbs',
            'hbs/underscore': 'bower_components/require-handlebars-plugin/hbs/underscore',
            'hbs/i18nprecompile': 'bower_components/require-handlebars-plugin/hbs/i18nprecompile',
            'hbs/json2': 'bower_components/require-handlebars-plugin/hbs/json2',
            'hbs/handlebars': 'bower_components/require-handlebars-plugin/hbs/handlebars'

        },
        hbs: {
            helpers: true,
            i18n: false,
            templateExtension: 'html',
            partialsUrl: ''
        },

        deps: ['main']
    });
}());
