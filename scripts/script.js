var map = L.map("map");

function displayMap(lat, lng) {
  map.setView([lat, lng], 13);
  L.marker([lat, lng], { icon: customIcon }).addTo(map);
}

L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

var customIcon = L.icon({
  iconUrl: "../images/icon-location.svg",
});

document.getElementsByClassName("block__ip")[0].style.display = "none";
document.getElementsByClassName("block__location")[0].style.display = "none";
document.getElementsByClassName("block__timezone")[0].style.display = "none";
document.getElementsByClassName("block__isp")[0].style.display = "none";

const btn = document.getElementsByClassName("hero__btn")[0];
const apiKey = "at_xo9jIZ9IO5vR8XHJ0JXzqyHvlrb43";
btn.onclick = () => {
  const input = document.getElementsByClassName("hero__input")[0].value;
  fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${input}`)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.code === 422) {
        document.getElementsByClassName("error-msg")[0].style.display = "block";
      } else {
        document.getElementsByClassName("error-msg")[0].style.display = "none";
      }
      console.log(data);
      let ip = data.ip;
      let isp = data.isp;
      let city = data.location.city;
      let country = data.location.country;
      let lat = data.location.lat;
      let lng = data.location.lng;
      let postalCode = data.location.postalCode;
      let timezone = data.location.timezone;
      document.getElementsByClassName("block__ip")[0].style.display = "block";
      document.getElementsByClassName("block__location")[0].style.display =
        "block";
      document.getElementsByClassName("block__timezone")[0].style.display =
        "block";
      document.getElementsByClassName("block__isp")[0].style.display = "block";
      document.getElementsByClassName("block__ip")[0].innerText = ip;
      document.getElementById("city").innerText = city;
      document.getElementById("country").innerText = country;
      document.getElementById("postalCode").innerText = postalCode;
      document.getElementById("timezone").innerText = timezone;
      document.getElementsByClassName("block__isp")[0].innerText = isp;
      displayMap(lat, lng);
    })
    .catch((error) => console.log(error));
};
