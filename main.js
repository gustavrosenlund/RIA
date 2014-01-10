require.config({
    //Skapar genvägar till min olika filer för att smidigare komma åt dem
    paths: {
        text: "src/lib/requirejs-text/text",
        jquery: "src/lib/jquery/jquery",
        underscore: "src/lib/underscore-amd/underscore",
        backbone: "src/lib/backbone-amd/backbone",
        localstorage: "src/lib/localstorage/backbone.localStorage",

        router: "src/router",

        masterview: "src/views/masterview",
        navview: "src/views/navview",
        todoview: "src/views/todoview",

        todomodel: "src/model/todomodel",
        todocollection: "src/model/todocollection"
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "backbone"
        },
        localstorage: {
            deps: ["backbone"],
            exports: "LocalStorage"
        }
    }

});
//Skapar en instans av min router som kickar igång hela applicationen
require(["src/router"], function (Router) { "use strict"; var router = new Router(); });
