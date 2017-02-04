function task(name, details) {
    this.name = name;
    this.details = details;
};

$(function() {

    $("#tasks").submit(function(event) {
        event.preventDefault();

        var name = $("#task-name").val();
        var details = $("#details").val();

        var newTask = new task(name, details);

        $("#input-task").append("<li><span class='task'>" + newTask.name + "</span></li>");

        $(".task").click(function() {

            $(this).parent().remove();

        });
    });
});