define(["jquery", "backbone", "underscore", "masterview", "todoview"], function ($, Backbone, _, MasterView, TodoView) {
    "use strict";
    return Backbone.Router.extend({

        initialize: function () {
            Backbone.history.start();

        },
        load: function () {
            this.view = new TodoView();
            this.master = new MasterView({el: $("#main"), view: this.view});
        },
        routes: {
            "": "todos",
            "todos": "todos",
            "about": "about"
        },
        todos: function () {
            this.load();
            this.master.renderApp();
        },
        about: function () {
            this.load();
            this.master.renderAbout();
        }

    });
});