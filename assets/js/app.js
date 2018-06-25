


$("#submit").on("click", function() {
    event.preventDefault();

    var animalValue = $("#animalEntry").val().trim();
    console.log(animalValue);

    $("animalEntry").val('')


});






var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"

$.ajax({
    // ajax is used to acquire the 
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var results = response.data;
    $("#").on("click", function() {
    
    
    });
});