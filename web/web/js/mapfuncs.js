function findLocation() {
	
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
		document.getElementById("latitude").innerText=latitude
		document.getElementById("longitude").innerText=longitude
		
		setCurPos()
		
        var coords = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            zoom: 15,
            center: coords,
            mapTypeControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(
                document.getElementById("mapContainer"), mapOptions
                );
            var marker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: "Your current location!"
            });
 
        });
    }else {
        alert("Geolocation API is not supported in your browser.");
    }	
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}


function getLongLat() {
	
	var longitude=roundNumber(parseFloat(document.getElementById("longitude").innerText),5)
	var latitude=roundNumber(parseFloat(document.getElementById("latitude").innerText),5)
	return {longitude:longitude,latitude:latitude}

}

function setLink(longt,lat) {
	var newminus="&#44;"
	var link=document.getElementById("getlink")
	var hrefNew=/*satId + "/" + */longt + "/" + lat
	
	//Minus symbol may have URL issues.
	hrefNew.replace("-",newminus)
	var curLoc=document.location.hostname.toString()
	
	//Link does not require current location prefix
	link.href="/" + hrefNew
	link.innerText=curLoc + "/" + hrefNew
	
}

function setCurPos() {
	var longlat=getLongLat()
	
	setLink(longlat.longitude,longlat.latitude)
}
/*
var searchList
function getSearchList() {
$.get('ajax/test.html', function(data) {
  $('.result').html(data);
  alert('Load was performed.');
});
}*/