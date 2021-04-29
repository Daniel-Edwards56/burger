$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    console.log(`id : ${id}`);
    var newDevoured = true;

    var newDevourState = {
      devoured: newDevoured
    };

    console.log(newDevoured);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
