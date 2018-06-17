$(function() {
var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries-row')
var country = $('#country');
var capital = $('#capital');
var region = $('#region');
var currency = $('#currency');
var symbol = $('#symbol');

$('#search').on('click', searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    country.empty();
    capital.empty();
    region.empty();
    currency.empty();
    symbol.empty();

    resp.forEach(function(item){
        $('<th>').text(item.name).appendTo(country);
        $('<td>').text(item.capital).appendTo(capital);
        $('<td>').text(item.region).appendTo(region);
        $('<td>').text(item.currencies[0].name).appendTo(currency);
        $('<td>').text(item.currencies[0].code).appendTo(symbol);
    });
}


});