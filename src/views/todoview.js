define(["jquery", "backbone", "underscore", "todocollection", "text!src/templates/todo-list.html", "text!src/templates/todo-edit.html"],
    function ($, Backbone, _, TodoCollection, TodoList, EditTodo) {
    "use strict";
    return Backbone.View.extend({

        todolist: _.template(TodoList),
        editTodo: _.template(EditTodo),

        initialize: function () {
            this.Todos = new TodoCollection();
        },
        events: {
            "click #button": "create",
            "click .edit": "renderEdit",
            "click #saveEdit": "edit",
            "click #cancelEdit": "cancelEdit",
            "click .delete": "delete",
            "click .completed": "mark"
        },
        render: function () {
            this.Todos.fetch();
            this.$el.html(this.todolist({collection: this.Todos.models}));
            return this;
        },
        renderEdit: function (e) {
            $("#" + e.currentTarget.parentElement.id).html(this.editTodo({todo: this.Todos.findWhere({id: e.currentTarget.parentElement.id})}));
        },
        create: function () {
            if($.trim(this.$el.find('#input').val())) {
                this.Todos.create({text: this.$el.find('#input').val()});
            }
            this.render();
        },
        edit: function (e) {
            this.Todos.findWhere({id: e.currentTarget.parentElement.id}).save({text: $("#editText").val()});
            this.render();
        },
        cancelEdit: function () {
            this.render();
        },
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
        delete: function (e) {
            if(this.Todos.findWhere({id: e.currentTarget.parentElement.id}).attributes.done) {
                this.Todos.get(e.currentTarget.parentElement.id).destroy();
                this.render();
            }
        }
    });
});