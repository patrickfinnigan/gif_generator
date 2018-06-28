$("#submit").on("click", function () {
    event.preventDefault();

    var animalValue = $("#animalEntry").val().trim();
    console.log(animalValue);

    var animalButton = $("<button>");
    animalButton.attr("data-animal", animalValue);
    animalButton.addClass("rowButtons btn btn-outline-primary");
    animalButton.append(animalValue);
    animalButton.attr("id", animalValue);

    $("#buttonRow").append(animalButton);

    $("animalEntry").val('')



});



$(document).on("click", ".rowButtons", function () {
    var animal = $(this).attr("data-animal");
    console.log(animal);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10"

    $.ajax({
        // ajax is used to acquire the 
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // var buttonAnimal = $(this).attr(animalValue);
        console.log(response);

        var results = response.data;

        for (let i = 0; i < results.length; i++) {
            var image = $("<img>").attr({
                src: `${results[i].images.original_still.url}`,
                still: `${results[i].images.original_still.url}`,
                active: `${results[i].images.original.url}`,
                dataState: "still"
            }).addClass("gifResult");

            var rating = results[i].rating

            var p = $("<p>").text("Rating: " + rating)

            var theGif = $("<div class='gif'>");

            theGif.prepend(p);
            theGif.prepend(image);


            $("#gifRow").append(theGif);

        }

        $(".gifResult").on("click", function () {

            var state = $(this).attr("dataState");

            if (state === "still") {
                $(this).attr("src", $(this).attr("active"));
                $(this).attr("dataState", "active");

            } else if (state === "active") {
                $(this).attr("src", $(this).attr("still"));
                $(this).attr("dataState", "still");
            }

        });


    });

});