define(function(require) {
    'use strict';

    var BaseView = require('modules/core/base-view');
    var template = require('hbs!modules/components/item/templates/list');

    var ListView = BaseView.extend({
        template: template,
        serializeData: function() {
            var list = [];
            var noResults = true;

            if (this.collection) {
                list = this.collection.toJSON();
                noResults = false;
            }

            var data = {
                list: list,
                noResults: noResults
            };

            return (data);
        }
    });

    return ListView;
});
