define(function(require) {
    'use strict';

    var TwoRowLayout = require('modules/layouts/two-row');
    var ItemListView = require('modules/components/item/list');

    var IndexPage = TwoRowLayout.extend({
        initialize: function() {
        },

        afterRender: function() {
            var self = this;

            TwoRowLayout.prototype.afterRender.apply(this);

            // create a list view with our collection. This will be empty until
            // our items have been fetched
            self.addSubView({
                name: 'ItemListView',
                viewType: ItemListView,
                container: '.content',
                options: {
                    //collection: self.collection
                }
            });

            // once our photos have been fetched, update the photo gallery collection
            //self.collection.fetch().then(function() {
            //    itemListView.update();
            //});
        }
    });

    return IndexPage;
});