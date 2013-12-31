define(["backbone", "localstorage", "todomodel"], function (backbone, LocalStorage, TodoModel) {
    "use strict";

    return backbone.Collection.extend({
        model: TodoModel,
        localStorage: new LocalStorage("todo-storage")
    });
});