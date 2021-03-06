// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//let map = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// Grabbing our GeoJSON data.
//L.geoJson(sanFranAirport, {
  // Grabbing our GeoJSON data.

// We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }

// }).addTo(map);

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
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
// let baseMaps = {
//   Light: streets,
//   Dark: dark
// };
//Create a base layer that holds both maps.
//  let baseMaps = {
//   "Streets": streets,
//   "Satellite Streets": satelliteStreets
//  };
// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
    if (feature.properties ) {
      layer.bindPopup( 
        "<b>Neighborhood: "+feature.properties.AREA_NAME+"</b>");
        // "<b>AirLine: "+feature.properties.airline+ 
        // "<hr>" +
        // "Destination: "+feature.properties.dst+"</b>");
     
  }
};
// var myStyle = {
//   "color": "blue",
//   "weight": 1,
//   "fillColor": "yellow"
  
// };
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(),
    stroke: true,
    weight: 0.5
  };
}
// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}
// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/wallaceportia/Mapping-Eathquakes/main/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/wallaceportia/Mapping-Eathquakes/main/torontoRoutes.json";
// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/wallaceportia/Mapping-Eathquakes/main/torontoNeighborhoods.json"
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
    // We set the style for each circleMarker using our styleInfo function
    style:  styleInfo
        }).addTo(map);
    });
//Grabbing our GeoJSON data
// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data,
//     {
//       onEachFeature:onEachFeature,
//       style: myStyle
//     }
//     ).addTo(map);
//});
// Creating a GeoJSON layer with the retrieved data.
//L.geoJson(data,
  {
 //   onEachFeature:onEachFeature
  }
  
  
 // ).addTo(map);
//});