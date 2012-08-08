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

function getLongLat() {
	var longitude=parseInt(document.getElementById("longitude").innerText)
	var latitude=parseInt(document.getElementById("latitude").innerText)
	return {longitude:longitude,latitude:latitude}

}

function setLink(longt,lat) {
	var newminus="&#44;"
	var link=document.getElementById("getlink")
	var hrefNew=satId + "/" + longt + "/" + lat
	
	//Minus symbol _may_ have URL issues.
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
