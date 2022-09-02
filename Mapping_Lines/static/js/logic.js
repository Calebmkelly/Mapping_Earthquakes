// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([35.6213, -97.3790], 5); 

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1974, -97.6663],
  [43.6818, -79.6129],
  [40.6417, -73.7809]
];

L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: 10
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

