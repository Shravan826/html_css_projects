// initialize and add the map
function initMap() {
  // your location 
  const loc = { lat: 42.361145, lang: -71.057083 };
  // centerd map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // the marker,positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}