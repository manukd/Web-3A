function getLocation() { 
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	}
}
window.onload = getLocation;