




// reviews scroll horizontal

$(document).ready(function(){
// menu js
  $(".hamburger").click(function(){
    $(".toggle_menu").toggle();
    });
    
    $("#logo").hover(
    function(){
      $("#logo > img").attr('src', 'media/img/logo horizontal-LED.png');
    },
    function(){
      $("#logo > img").attr('src', 'media/img/Logo Horizontal.png');
    }
  );
  
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      responsive:{
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
    
    

    // efecto flecha brillante hover

  $(".section_title").hover(
    function(){
    $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
    },
    function(){
    $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
  });




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
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    }
  });


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

  function playVideo() {
    document.getElementById('churrourbanVideo').style.display = 'block';
    document.getElementById('churrourbanImage').style.display = 'none';
    document.getElementById('churrourbanVideo').play();
  }

  function pauseVideo() {
      document.getElementById('churrourbanVideo').style.display = 'none';
      document.getElementById('churrourbanImage').style.display = 'block';
      document.getElementById('churrourbanVideo').pause();
  }
});

// ESTO ESTZABAZ EN Script.JS
// $(document).ready(function(){
//   // owl carousel script
//   $('.carousel').owlCarousel({
//       margin: 20,
//       loop: true,
//       autoplay: true,
//       autoplayTimeOut: 1000,
//       autoplayHoverPause: true,
//       responsive: {
//           0:{
//               items: 1,
//               nav: false
//           },
//           600:{
//               items: 2,
//               nav: false
//           },
//           1000:{
//               items: 3,
//               nav: false
//           }
//       }
//   });
// });


// ESTO ESTABA EN RESERVAS.JS
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     margin: 20,
//     responsive:{
//       600:{
//         items:2
//       },
//       1000:{
//         items:3
//       }
//     }
//   });
// });


