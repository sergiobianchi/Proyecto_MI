const streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView

  function inicializar () {
    panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
          position: posicionCentral,
          pov: {
          heading: 34,
          pitch: 10
          }
    });

    this.fijarStreetView(posicionCentral)
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    panorama.setPosition(ubicacion)

    mapa.setStreetView(panorama);
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
