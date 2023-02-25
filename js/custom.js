$(document).ready(function() {
  // Selecciona todos los enlaces de la barra de navegación
  $('a.nav-link').on('click', function(event) {
    // Asegura que el enlace tenga un hash válido y no sea el mismo que el de la página actual
    if (this.hash !== "" && this.hash !== "#home") {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();
      // Almacena el hash en una variable
      let hash = this.hash;
      // Usa jQuery para animar el desplazamiento suave al elemento con el hash correspondiente
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Agrega el hash al URL después de la animación (para que el usuario pueda ver la ubicación en la que se desplazó)
        window.location.hash = hash;
      });
    }
  });
});
