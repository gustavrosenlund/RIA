define(['jquery', 'backbone', 'mainview', 'navview', 'contentview'],
    function ($, Backbone, MainView, NavView, ContentView) {
        "use strict";
        return {
            start: function () {
                var navView = new NavView(),
                    contentView = new ContentView(),
                    mainView = new MainView({el: $('#main'), navView: navView, contentView: contentView});
                mainView.render();
                Backbone.history.start();
            }
        };
    });