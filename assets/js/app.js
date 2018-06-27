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
            var image = $("<img>").attr("src", results[i].images.original.url).addClass("gifResult");
            $("#gifRow").append(image);
        }

    });

});