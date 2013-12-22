var randomuserURL = 'http://api.randomuser.me/';

var myButton = document.getElementById('loadbutton');
myButton.onclick = loadAJAX;

function loadAJAX () {
	$.ajax({
	  url: randomuserURL,
	  dataType: 'json',
	  success: function(data){
	    console.log(data.results[0].user.location.zip);
	  }
	});
}