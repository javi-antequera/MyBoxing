//Funcion que valida el formulario
function validarForm(){
  let nombre = document.getElementById("nombre").value; 
  let mail = document.getElementById("email").value;
  let textarea = document.getElementById("textarea").value;
  
  let prohibidos = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if ( !prohibidos.test(mail) ){                                                         
      alert("Error: La dirección de correo " + mail + " es incorrecta.");
  }
  
  if ((nombre == " ") || (mail == " ") || (textarea == " ")) { 
      alert("Los campos no pueden quedar vacios");
  }
  
  }

  //Funcion para el zoom en las imagenes
  $(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});
//Función paera que al pulsar un elemento del navbar tenga una animación con un desplazamiento suave
$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
