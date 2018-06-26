$("#submit").on("click", function () {
    event.preventDefault();

    var animalValue = $("#animalEntry").val().trim();
    console.log(animalValue);

    var animalButton = $("<button>");
    animalButton.attr("data-animal", animalValue);
    animalButton.addClass("rowButtons");
    animalButton.append(animalValue);

    $("#buttonRow").append(animalButton);

    $("animalEntry").val('')

});



$("#rowButtons").on("click", function () {
    var animal = $(this).attr("data-animal");
    console.log(animal);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10"

    $.ajax({
        // ajax is used to acquire the 
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var buttonAnimal = $(this).attr(animalValue);
        console.log(buttonAnimal);

        var results = response.data;

        for (let i = 0; i < array.length; i++) {

        }

    });

});