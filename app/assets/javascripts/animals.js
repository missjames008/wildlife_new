$("document").ready(function() {

  $("#add_new_animal_button").on(
    "click",
    function() {
      // Data to be submitted
      newAnimal = {
        "animal": {
          "name": $("#animal_name").val(),
          "latin_name": $("#animal_latin_name").val(),
          "kingdom": $("#animal_kingdom").val()
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: newAnimal,
        success: function(dataFromServer) {
          add_to_animals_list(dataFromServer);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });
  });// end add animal



// Function to be called after data has been successfully submitted
function add_to_animals_list(data) {
  $("#animal_list").append(
    '<li><a href="' + '/animals/' + data.id + '">' +
    data.name + "</a></li>");
}

  $("#add_new_sighting_button").on(
    "click",
    function() {
      var date = $("#sightings_date").val();
      var lat = $("#sightings_lat").val();
      var long = $("#sightings_long").val();
      var animal_id = $("#animal_id").val();
      // Data to be submitted
      newSighting = {
        "sighting": {
          "date": date,
          "lat": lat,
          "long": long,
          "animal_id": animal_id
        }
      };
    alert(JSON.stringify(newSighting));
      $.ajax({
        dataType: 'json',
        url: '/sightings',
        method: 'POST',
        data: newSighting,
        success: function(dataFromServer) {
          add_to_sighting_list(dataFromServer);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new sighting failed: " + errorThrown);
        }
      });
  });// end add sighting

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_sighting_list(data) {
  $("#sighting_list").append(
    '<li><a href="' + '/sightings/' + data.id + '">' +
    data.date + "</a></li>");
}
