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
    $("#trigger1").click(function() {
        $("#ventana1").css("visibility","visible");
        $("#ventana1").css("display","flex");
    });
    $("#trigger2").click(function() {
        $("#ventana2").css("visibility","visible");
        $("#ventana2").css("display","flex");
    });
    $("#trigger3").click(function() {
        $("#ventana3").css("visibility","visible");
        $("#ventana3").css("display","flex");
    });
    $("#trigger4").click(function() {
        $("#ventana4").css("visibility","visible");
        $("#ventana4").css("display","flex");
    });
    $("#trigger5").click(function() {
        $("#ventana5").css("visibility","visible");
        $("#ventana5").css("display","flex");
    });
    $("#trigger6").click(function() {
        $("#ventana6").css("visibility","visible");
        $("#ventana6").css("display","flex");
    });
    $("#trigger7").click(function() {
        $("#ventana7").css("visibility","visible");
        $("#ventana7").css("display","flex");
    });
    $("#trigger8").click(function() {
        $("#ventana8").css("visibility","visible");
        $("#ventana8").css("display","flex");
    });
    $(".btn-close").click(function() {
        $("#ventana1, #ventana2, #ventana3, #ventana4, #ventana5, #ventana6, #ventana7, #ventana8 ").css("visibility","hidden");
        $("#ventana1, #ventana2, #ventana3, #ventana4, #ventana5, #ventana6, #ventana7, #ventana8").css("display","block");
    });
    $(".btn-comprar-1").click(function() {
        $("#ventana1, #ventana2, #ventana3, #ventana4, #ventana5, #ventana6, #ventana7, #ventana8").css("visibility","hidden");
        $("#ventana1, #ventana2, #ventana3, #ventana4, #ventana5, #ventana6, #ventana7, #ventana8").css("display","block");
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



