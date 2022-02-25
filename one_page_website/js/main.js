// initialize and add the map
function initMap() {
  // your location 
  const loc = { lat: 18.464568, lng: 73.869497 };
  // centerd map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // the marker,positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// sticky menu backgrund makes transperent
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  }
  else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});




// jquery for smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      700
    );
  }
});
