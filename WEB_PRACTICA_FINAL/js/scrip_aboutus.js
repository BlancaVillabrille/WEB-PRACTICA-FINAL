
$(document).ready(function(){
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
  });



    $(".section_title").hover(
      function(){
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
      },
      function(){
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
      
    });