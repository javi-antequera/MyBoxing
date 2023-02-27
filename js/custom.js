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
function validarForm(){

  let nombre = document.getElementById("nombre").value; 
  let mail = document.getElementById("email").value;
  let textarea = document.getElementById("textarea").value;
  
  let prohibidos = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if ( !prohibidos.test(mail) ){                                                         
      alert("Error: La dirección de correo " + correo + " es incorrecta.");
  }
  
  if ((nombre == " ") || (mail == " ") || (textarea == " ")) { 
      alert("Los campos no pueden quedar vacios");
  }
  
  }
