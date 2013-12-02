define(["backbone", "jquery"], function (Backbone, $) {
    return Backbone.View.extend({
        initialize: function () { },
        render: function () { this.$el.html("Content World"); return this; }
    });

});