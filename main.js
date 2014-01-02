require.config({
    paths: {
        text: "src/lib/requirejs-text/text",
        jquery: "src/lib/jquery/jquery",
        underscore: "src/lib/underscore-amd/underscore",
        backbone: "src/lib/backbone-amd/backbone",
        localstorage: "src/lib/backbone.localstorage/backbone.localStorage-min",

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
require(["src/router"], function (Router) { "use strict"; var router = new Router(); });
