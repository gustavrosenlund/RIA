define(["backbone"], function (backbone) {
    "use strict";

    return backbone.Model.extend({
        defaults: {
            text: "Empty",
            done: false
        }
    });
});