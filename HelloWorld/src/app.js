define(["backbone", "mainview"],
    function(Backbone, MainView) {
        return {
            start: function () {
                var mainView = new MainView({el: $("#main")});
                mainView.render();
                Backbone.history.start();
            }
        };
    });