define(['jquery', 'backbone', 'text!src/templates/content-template.html'], function ($, backbone, template) {
    "use strict";
    return backbone.View.extend({
        template: template,
        events: {
            'click #button': 'create'
        },
        initialize: function (o) {},
        render: function () {
            this.$el.html(this.template);
            return this;
        },
        create: function () {
            $('#content').append('hej');
        }
    });
});