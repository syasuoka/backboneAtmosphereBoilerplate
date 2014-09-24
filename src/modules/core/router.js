define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    var ItemCollection = require('modules/components/item/collection');

    var MainLayout = require('modules/layouts/main');
    var IndexPage = require('modules/pages/index-page');

    var items = new ItemCollection();

    var Router = Backbone.Router.extend({

        initialize: function() {
            this.layout = new MainLayout({
                el: '#app'
            });
            this.layout.render();
        },

        routes: {
            '': 'index',
        },

        insertView: function(page) {
            var currentPage = this.layout.addSubView(page);

            // render our whole layout, which will render the child
            // page views.
            currentPage.render();

            return currentPage;
        },

        index: function() {

            this.insertView({
                name: 'IndexPage',
                viewType: IndexPage,
                container: '.main',
                options: {
                    collection: items
                }
            });
        }

    });

    return new Router();

});
