function playVideo() {
  document.getElementById('churrourbanVideo').style.display = 'block';
  document.getElementById('churrourbanVideo').play();
}

function pauseVideo() {
  document.getElementById('churrourbanVideo').style.display = 'none';
  document.getElementById('churrourbanVideo').pause();
}










// reviews scroll horizontal

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


// efecto flecha brillante hover

    $(".section_title").hover(
      function(){
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
      },
      function(){
      $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
      
    });

    