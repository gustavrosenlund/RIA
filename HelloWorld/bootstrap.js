require.config({
    paths: {
        jquery: "src/lib/jquery",
        backbone: "src/lib/backbone",
        underscore: "src/lib/underscore",
        mainview: "src/views/mainview",
        navview: "src/views/navview",
        contentview: "src/views/contentview"

    },
    shim: {
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});
require(["src/app"], function (App) { App.start(); });