///check off specific Todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on x to delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        let todoText = $(this).val();
        //clear input box after setting new todo
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class=\'fas fa-trash-alt\'></i></span> " + todoText + "</li>");
    }
});

$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
});