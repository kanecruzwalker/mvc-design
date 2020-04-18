$(() => {
    $(".change-devoured").on("click", function () {
        const id = $(this).data("id");
        const newDevoured = $(this).data("newsleep");

        const newDevouredState = {value: newDevoured};

        $.ajax(`/api/burgers/${id}/devoured`, {
            type: "PUT",
            data: JSON.stringify(newSleepState),
            contentType: "application/json; charset=UTF-8",
        }).then(() => {
            location.reload();
        });
    });

    $(".create-burger").on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(() => {
            location.reload();
        });
    });

    $(".delete-burger").on("click", function () {
        const id = o$(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
            type:"DELETE",
        }).then(() => {
            location.reload();
        });
    });
});