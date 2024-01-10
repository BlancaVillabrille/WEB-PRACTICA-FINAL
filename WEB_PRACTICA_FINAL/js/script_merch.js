$(document).ready(function(){
    // MENU
    $(".hamburger").click(
        function(){
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

    // PRIMERA SECCION
    $(".section_title").hover(
        function(){
            $(".section_title > img").attr('src', 'media/img/MERCH/flecha_LED.png');
        },
        function(){
            $(".section_title > img").attr('src', 'media/img/flecha.png');
        }
    );
    $(".btn-ver-coleccion").hover(
        function(){
        $(".btn-ver-coleccion > img").attr('src', 'media/img/flecharosa.svg');
        },
        function(){
        $(".btn-ver-coleccion > img").attr('src', 'media/img/flecha.svg');
        }
    );

    // GALERIA
    // PANTALON
    $(".rosa-pantalon").click(function(){
        $('.pantalon').attr('src','media/img/MERCH/Pantalon 2.png');
        console.log("Hello");

    });
    $(".morado-pantalon").click(function(){
        $('.pantalon').attr('src','media/img/MERCH/Pantalon 1.png');
    });
    $(".verde-pantalon").click(function(){
        $('.pantalon').attr('src','media/img/MERCH/Pantalon 3.png');
    });
    $(".blanco-pantalon").click(function(){
        $('.pantalon').attr('src','media/img/MERCH/Pantalon 4.png');
    });
    $(".negro-pantalon").click(function(){
        $('.pantalon').attr('src','media/img/MERCH/Pantalon 5.png');
    });




    // // VENTANA MODAL
    $(".trigger1").click(function(){
        $('.ventana1').css('visibility','visible');
        $('.ventana1').css('display','flex');
        console.log("Hello");
    });


    
    // BOTONES IMAGENES
    // BOTONES TALLA
    var buttons = $(".btn-talla");

    buttons.click(function() {
      buttons.removeClass("pink"); // Eliminar la clase "pink" de todos los botones
      $(this).addClass("pink"); // Agregar la clase "pink" al botón actual
    });
    $(".img-general").on("click", function () {
        // Al abrir la ventana modal
        $(".btn-talla").removeClass("pink"); // Elimina la clase pink de todos los botones
    });

    // BOTONOES CANTIDAD
    $(document).ready(function(){
        var contador = 1;
        $(".btn-cantidad-mas").click(function(){
            contador++;
            $(".contador").text(contador);
        })
        $(".btn-cantidad-menos").click(function(){
            if (contador === 1) {
                $(".contador").text(contador);
            } else {
                contador--;
                $(".contador").text(contador);
            }
        })
     })

     $(".btn-comprar-1").hover(
        function(){
        $(".btn-comprar-1 > img").attr('src', 'media/img/flecharosa.svg');
        },
        function(){
        $(".btn-comprar-1 > img").attr('src', 'media/img/flecha.svg');
        }
    );


});



