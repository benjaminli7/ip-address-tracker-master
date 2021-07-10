var map = L.map("map", {
  center: [48.833, 2.333],
  zoom: 16,
});

L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

var customIcon = L.icon({
  iconUrl: "../images/icon-location.svg",
});

L.marker([48.833, 2.333], { icon: customIcon }).addTo(map);
