// @ts-nocheck
var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
let posicionCentral = {lat: -34.5925899, lng: -58.418641};
let zoomInicial = 15;


// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  mapa = new google.maps.Map( document.getElementById('map'), {
                              center: posicionCentral,
                              zoom: zoomInicial});

  streetViewModulo.inicializar();
  geocodificadorModulo.inicializar();
  marcadorModulo.inicializar();
  direccionesModulo.inicializar();
  lugaresModulo.inicializar();
  
}
