define(["jquery", "backbone", "underscore", "text!src/templates/nav.html", "text!src/templates/about.html"], function ($, Backbone, _, Nav, About) {
    "use strict";
    return Backbone.View.extend({
        navigation: _.template(Nav),
        about: _.template(About),

        //Tömmer nav och content divarna för att saker inte ska renderas ut på varandra.
        initialize: function (e) {
            this.view = e.view;
            $("#nav").empty();
            $("#content").empty();
            $("#nav").append(this.navigation());
        },
        //Renderar applicationen
        renderApp: function () {
            $("#content").append(this.view.render().el);
        },
        //Renderar about
        renderAbout: function () {
            $("#content").append(this.about());
        }
    });
});