define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var Item = require('modules/components/item/model');
    var API = require('modules/services/api');

    var ItemCollection = Backbone.Collection.extend({
        model: Item,
        comparator: function(model) {
            return (1 / model.id);
        },
        url : function() {
            return API.items;
        }
    });

    return ItemCollection;
});