define(["jquery", "backbone", "underscore", "todocollection", "text!src/templates/todo-list.html", "text!src/templates/todo-edit.html"],
    function ($, Backbone, _, TodoCollection, TodoList, EditTodo) {
    "use strict";
    return Backbone.View.extend({

        todolist: _.template(TodoList),
        editTodo: _.template(EditTodo),

        //Valde att göra en egen modell samt collection istället för att bara använda Backbone.Collection. Iom att jag gjorde som jag hjorde kan jag sätta default värde vilket iofs inte är jätte intressant i denna men men.
        initialize: function () {
            this.Todos = new TodoCollection();
        },
        //Mina events som säger vilken metod som ska anropas
        events: {
            "click #button": "create",
            "click .edit": "renderEdit",
            "click #saveEdit": "edit",
            "click #cancelEdit": "cancelEdit",
            "click .delete": "delete",
            "click .completed": "mark"
        },
        //Hämtar alla todos från localstorage och retunerar dem.
        render: function () {
            this.Todos.fetch();
            this.$el.html(this.todolist({collection: this.Todos.models}));
            return this;
        },
        //Hämtar information om vald todo och renderar ut ett formulär för att ändra todon
        renderEdit: function (e) {
            $("#" + e.currentTarget.parentElement.id).html(this.editTodo({todo: this.Todos.findWhere({id: e.currentTarget.parentElement.id})}));
        },
        //Hämtar informationen och kollar så att inputfältet inte var tomt annars så skapar den todo och lägger till den i localstorage.
        create: function () {
            if($.trim(this.$el.find('#input').val())) {
                this.Todos.create({text: this.$el.find('#input').val()});
            }
            this.render();
        },
        //Sparar todon som man har ändrat i genom att hämta informationen och ändra i localstorage
        edit: function (e) {
            this.Todos.findWhere({id: e.currentTarget.parentElement.id}).save({text: $("#editText").val()});
            this.render();
        },
        //Renderar ut formuläret ifall man valt att avbryta editering
        cancelEdit: function () {
            this.render();
        },
        //Sätter class på vald todo för att markera att den är utförd samt för att man ska kunna radera den
        mark: function (e) {
            if(!this.Todos.findWhere({id: e.currentTarget.parentElement.id}).attributes.done) {
                $("#" + e.currentTarget.parentElement.id).addClass("done");
                this.Todos.findWhere({id: e.currentTarget.parentElement.id}).save({done: true});
            }
            else{
                $("#" + e.currentTarget.parentElement.id).removeClass();
                this.Todos.findWhere({id: e.currentTarget.parentElement.id}).save({done: false});
            }
        },
        //raderar vald todo. krävs att den är markerad som klar annars tars den inte bort
        delete: function (e) {
            if(this.Todos.findWhere({id: e.currentTarget.parentElement.id}).attributes.done) {
                this.Todos.get(e.currentTarget.parentElement.id).destroy();
                this.render();
            }
        }
    });
});