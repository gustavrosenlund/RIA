define(["backbone"], function (backbone) {
    "use strict";
//Modell innehållandes default värden
    return backbone.Model.extend({
        defaults: {
            text: "Empty",
            done: false
        }
    });
});