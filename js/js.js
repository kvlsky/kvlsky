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


/*/ Get the modal*/
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the image and insert it inside the modal - use its "alt" text as a caption

for ( i=0; i<=14; i++) {
    var img = document.getElementsByClassName("img-modal")[i];

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
