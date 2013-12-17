define(['jquery', 'backbone', 'text!src/templates/nav-template.html'], function($, backbone, template) {
    "use strict";
    return backbone.View.extend({
        template: template,
        initialize: function (o) {},
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
});