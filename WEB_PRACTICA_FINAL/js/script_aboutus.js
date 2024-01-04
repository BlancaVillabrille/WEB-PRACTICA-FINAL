$(document).ready(function(){
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
});
