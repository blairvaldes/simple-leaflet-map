var mymap = L.map('mapid').setView([51.508, -0.11], 13);

 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker_1 = L.marker([51.508, -0.15]).addTo(mymap);

var marker_2 = L.marker([51.508, -0.11]).addTo(mymap); 
var circle = L.circle([51.508, -0.11], {
    color: 'green',
    fillColor: '#fff111',
    fillOpacity: 0.40,
    radius: 500
}).addTo(mymap);

var my_polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker_1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker_2.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
my_polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
