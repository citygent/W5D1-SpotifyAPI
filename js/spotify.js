$(document).ready(function() {
  console.log('Merry-go-round Breaks Down')

var searchButton = $('#get-results')
var searchSelect = $('#filter')
var searchBox = $('#search-input')
var results = $('#results')

searchButton.on('click', doThing);
searchSelect.on('change', doThing);

function doThing(e) {
  searchInput = searchBox.val()
  searchFilter = searchSelect.val()
  // console.log(searchInput);
  // console.log(searchFilter);

  $.get('https://api.spotify.com/v1/search?q='+ searchInput +'&type=' + searchFilter, function(response) {
    $('#results ul').empty()
    // debugger;
    // console.log(response)
    bands = response[searchFilter+'s']['items'];
    $.each(bands, function(index, item) {
      // console.log(item.name)
      var li = "<li>" + item.name + "</li>";
      $('#results ul').append(li)
    })
  })
}




}); //document ready ends.

