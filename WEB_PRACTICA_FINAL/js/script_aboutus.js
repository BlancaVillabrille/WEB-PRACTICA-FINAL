$(document).ready(function(){

  $(".hamburger").click(function(){
    $(".toggle_menu").toggle();
  });
  
  $("#logo").hover(
    function(){
      $("#logo > a > img").attr('src', 'media/img/logo horizontal-LED.png');
    },
    function(){
      $("#logo > a > img").attr('src', 'media/img/Logo Horizontal.png');
    }
  );
  
  $(".section_title").hover(
    function(){
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
    },
    function(){
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha.png');
    }
  );

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    responsive: {
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Efecto flecha brillante hover
  $(".section_title").hover(
    function() {
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED_hover.png');
    },
    function() {
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
    }
  );

  // Carrusel adicional
  $(".carousel").owlCarousel({
    loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  // Función de validación de correo (JavaScript puro)
            function validarCorreo() {
                var emailInput = document.getElementById('emailInput');
                if (emailInput.checkValidity()) {
                    alert('¡Gracias por suscribirte!');
                } else {
                    if (emailInput.validity.typeMismatch) {
                        emailInput.setCustomValidity('Por favor, ingresa una dirección de correo electrónico válida.');
                    } else {
                        emailInput.setCustomValidity('Este campo es obligatorio.');
                    }
                    emailInput.reportValidity();
                }
            }
          });
     
