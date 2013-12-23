var randomuserURL = 'http://api.randomuser.me/';

var myButton = document.getElementById('loadbutton');
myButton.onclick = loadAJAX;

var lat = '';
var lng = '';
var zipcode;

function loadAJAX () {
	$.ajax({
	  url: randomuserURL,
	  dataType: 'json',
	  success: function(data){
	    zipcode = data.results[0].user.location.zip;
	    latlng();
	  }
	});
}

function latlng () {
    geocoder.geocode( { 'address': zipcode}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			 lat = results[0].geometry.location.lat();
			 lng = results[0].geometry.location.lng();
		} else {
			alert("Geocode was not successful for the following reason: " + status);
		}
	});
	console.log('Latitude: ' + lat + ' Logitude: ' + lng);
}