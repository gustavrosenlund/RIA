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
                this.render();
                this.messages(3);
            }
            else
            {
                this.messages(1);
            }
        },
        edit: function (e) {
            this.Todos.findWhere({id: e.currentTarget.parentElement.id}).save({text: $("#editText").val()});
            this.render();
            this.messages(4);
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
                var removed = this.Todos.get(e.currentTarget.parentElement.id);
                this.Todos.get(e.currentTarget.parentElement.id).destroy();
                this.render();
                console.log(removed);
                this.messages(2, removed.attributes.text);
            }
        },
        messages: function (index, data) {

            switch (index) {
                case 1:
                    $('#msg').attr("class", "error");
                    $('#msg').html("You must specify a Todo.");
                    break;
                case 2:
                    $('#msg').attr("class", "message");
                    $('#msg').html(data + " was removed.");
                    break;
                case 3:
                    $('#msg').attr("class", "message");
                    $('#msg').html("New todo added.");
                    break;
                case 4:
                    $('#msg').attr("class", "message");
                    $('#msg').html("Todo was edited.");
                    break;
                default:
                    break;

            }
        }
    });
});