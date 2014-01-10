define(["backbone", "localstorage", "todomodel"], function (backbone, LocalStorage, TodoModel) {
    "use strict";
//Bestämmer vilken model som ska användas samt att vi ska använda oss av localstorage
    return backbone.Collection.extend({
        model: TodoModel,
        localStorage: new LocalStorage("todo-storage")
    });
});