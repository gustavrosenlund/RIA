define(["jquery", "backbone", "underscore", "masterview", "todoview"], function ($, Backbone, _, MasterView, TodoView) {
    "use strict";
    return Backbone.Router.extend({

        initialize: function () {
            Backbone.history.start();

        },
        //Skapar instanser av mina olika vyer för att kunna anropa renderApp() och renderAbout() via master variablen
        load: function () {
            this.view = new TodoView();
            this.master = new MasterView({el: $("#main"), view: this.view});
        },
        //Bestämmer vilken metod som ska köras beroende på var man är i applicationen
        routes: {
            "": "todos",
            "todos": "todos",
            "about": "about"
        },
        //Kör Todo-applikationen
        todos: function () {
            this.load();
            this.master.renderApp();
        },
        //Renderar en about sida som inte är jätte intressant :)
        about: function () {
            this.load();
            this.master.renderAbout();
        }

    });
});