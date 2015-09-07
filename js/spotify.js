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
  console.log(searchInput);
  console.log(searchFilter);
}






});

