require.config({
    paths: {
        text: "src/lib/requirejs-text/text",
        jquery: "src/lib/jquery/jquery",
        underscore: "src/lib/underscore-amd/underscore",
        backbone: "src/lib/backbone-amd/backbone",
        localstorage: "src/lib/backbone.localstorage/backbone.localstorage",
        mainview: "src/views/mainview",
        navview: "src/views/navview",
        contentview: "src/views/contentview",

        //Brocco
        showdown: "src/lib/brocco/showdown",
        codemirror: "src/lib/brocco/codemirror",
        jsmode: "src/lib/brocco/codemirror-javascript-mode",
        xmlmode: "src/lib/brocco/codemirror-xml-mode",
        cssmode: "src/lib/brocco/codemirror-css-mode",
        htmlmixedmode: "src/lib/brocco/codemirror-htmlmixed-mode",
        brocco: "src/lib/brocco/brocco.js",
        htmlncss: "src/lib/brocco/html-and-css",
        jumpto: "src/lib/brocco/jump-to"
    },
    shim: {
        "backbone": {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }

});
require(['src/app'], function (App) { "use strict"; App.start(); });