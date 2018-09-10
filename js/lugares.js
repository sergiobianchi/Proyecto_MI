// @ts-nocheck
const lugaresModulo = (function () {
  let servicioLugares; // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
    /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
    página (las direcciones ingresables por el usuario).
    Para esto creá un círculo con radio de 20000 metros y usalo para fijar
    los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
    debugger;
    let autocomplete = new google.maps.places.Autocomplete($('#direccion')[0], { types: ['geocode'] });
    autocomplete.bindTo('bounds', mapa);
    autocomplete.setOptions({strictBounds: true});

    let areaLimite = new google.maps.Circle( {
      center: posicionCentral,
      radius: 20000
      });

    autocomplete.setBounds(areaLimite.getBounds());
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    this.servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar();
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar
  function buscarCerca (posicion) {
    /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

    let request = {
      location: posicion,
      radius: parseInt($('#radioS').text()).toString(),
      types: [$('#tipoDeLugar')[0].value]
    };

    this.servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
  }

  return {
    inicializar,
    buscarCerca
  }
})()
