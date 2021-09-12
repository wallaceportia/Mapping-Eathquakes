// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//let map = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
// We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }

// }).addTo(map);

  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();
   }
}).addTo(map);
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);
// let myLine = [
// [37.6213, -122.3790],
// [30.1975, -97.6664],
// [43.6777, -79.6248],
// [40.6413, -73.7781],
// ];
// L.polyline(myLine, {
//   color: "blue",
//   dashArray: "4",
//   opacity: "0.5",
//   weight: "4",
// }).addTo(map);


// Get data from cities.js
// let cityData = cities;
//  // Loop through the cities array and create one marker for each city.
//  cityData.forEach(function(city) {
//   console.log(city)
//     L.circleMarker(city.location, {
//       radius: (city.population-200000)/100000,
//       color:"orange",
//       lineWeight: "4"
//     }
//       ).addTo(map)

//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// });
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);