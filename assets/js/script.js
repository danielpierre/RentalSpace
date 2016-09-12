(function () {
	// Initialize map, set zoom level, hide zoom
	// controls and disable mousewheel scrolling
	var map = L.map('map', {
		center: [51.5926628, -0.0413272],
		zoom: 16,
		zoomControl:false,
		scrollWheelZoom: false
	});

	// Enable mousewheel scrolling when the user 
	// focuses the map by clicking or tabbing to it
	map.on('focus', function () {
		map.scrollWheelZoom.enable();
	});

	// Add basemap layer
	var Hydda_Full = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
		attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	// Define custom marker
	var rsIcon = L.icon({
		iconUrl: 'assets/icons/marker.png',
		iconSize: [62, 56],
		iconAnchor: [40, 56],
		popupAnchor: [1, -56],
	});

	// Add marker with popup
	var marker = L.marker([51.5929028, -0.0349865], {
		icon: rsIcon,
		title: "Rental Space",
		alt: "Rental Space",
		draggable: false
	}).bindPopup(
		"<a href='https://goo.gl/ic1SvJ' target='_blank'><p><b>Rental Space</b><br>42 Oatland Rise<br>London&nbsp;&nbsp;LS1 7JR</p></a>"
	).addTo(map);
}());