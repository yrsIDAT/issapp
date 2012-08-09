function Get() {	
	
    
}


function Search() {

	//is ID number
	//if number, goto url
	var searchSat=document.getElementById("satellite_input").value
	if (searchSat.length>0) {
		if (!isNaN(searchSat)) {
			var longlat=getLongLat()
			window.location=/*"/" + searchSat + "/" + */ longlat.longitude + "/" + longlat.latitude
		}
	}

}

function init() {
	
	findLocation()
	
}

var HasCleared=false
function ClearBox(object) {

	if (!HasCleared) {
		HasCleared=true
		object.value=""
	}

}

