define(function(require) {
    'use strict';

    var BaseView = require('modules/core/base-view');
    var template = require('hbs!modules/components/item/templates/list');

    var ListView = BaseView.extend({
        template: template,
        serializeData: function() {
            return {
                //list: this.collection.toJSON()
            };
        }
    });

    return ListView;
});
