var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(countryName.length === 0) {
        countryName = 'Poland';
    };
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
    })
};

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item){
    $('<li>').text(item.name + " is a country in " + item.region + " and it\'s capitol is " + item.capital).appendTo(countriesList);
});
};