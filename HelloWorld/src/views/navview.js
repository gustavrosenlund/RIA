define(["backbone", "jquery"], function (Backbone, $) {
    return Backbone.View.extend({
        initialize: function () { },
        render: function () { this.$el.html("Hello World"); return this; }
    });

});