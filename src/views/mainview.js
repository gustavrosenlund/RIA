define(['jquery', 'backbone'], function($, Backbone) {
    "use strict";
    return Backbone.View.extend({
        initialize: function (o) {
            this.navView = o.navView;
            this.contentView = o.contentView;
        },
        render: function () {
            this.$('#nav').append(this.navView.render().el);
            this.$('#content').append(this.contentView.render().el);
        }
    });
});