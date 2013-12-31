define(["jquery", "backbone", "underscore", "text!src/templates/nav.html", "text!src/templates/about.html"], function ($, Backbone, _, Nav, About) {
    "use strict";
    return Backbone.View.extend({
        navigation: _.template(Nav),
        about: _.template(About),

        initialize: function (e) {
            this.view = e.view;
            $("#nav").empty();
            $("#content").empty();
            $("#nav").append(this.navigation());
        },
        renderApp: function () {
            $("#content").append(this.view.render().el);
        },
        renderAbout: function () {
            $("#content").append(this.about());
        }
    });
});