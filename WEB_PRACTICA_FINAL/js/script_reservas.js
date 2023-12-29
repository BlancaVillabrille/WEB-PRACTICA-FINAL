$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3, /* Número de testimonios visibles a la vez */
      loop: true,
      margin: 10,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });