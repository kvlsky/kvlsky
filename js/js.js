$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});/**
 * Created by Andrew on 1/24/2017.
 */
function initMap() {
    var uluru = {lat: 51.344431, lng: 11.977343};
    var ukr = {lat:50.525594,lng:30.611418};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: ukr,
        map: map
    });
}
