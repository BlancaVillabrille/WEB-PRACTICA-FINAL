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
    // CAMISETA1
    $(".rosa-camiseta1").click(function(){
        $('.camiseta1').attr('src','media/img/MERCH/camiseta 10.png');
    });
    $(".morado-camiseta1").click(function(){
        $('.camiseta1').attr('src','media/img/MERCH/camiseta 9.png');
    });
    // CAMISETA2
    $(".rosa-camiseta2").click(function(){
        $('.camiseta2').attr('src','media/img/MERCH/camisetas 1.png');
    });
    $(".morado-camiseta2").click(function(){
        $('.camiseta2').attr('src','media/img/MERCH/camisetas 6.png');
    });
    $(".verde-camiseta2").click(function(){
        $('.camiseta2').attr('src','media/img/MERCH/camisetas 2.png');
    });
    $(".blanco-camiseta2").click(function(){
        $('.camiseta2').attr('src','media/img/MERCH/camisetas 4.png');
    });
    $(".negro-camiseta2").click(function(){
        $('.camiseta2').attr('src','media/img/MERCH/camisetas.png');
    });
    // sudadera1
    $(".rosa-sudadera1").click(function(){
        $('.sudadera1').attr('src','media/img/MERCH/sudadera 1 delantera.png');
    });
    $(".morado-sudadera1").click(function(){
        $('.sudadera1').attr('src','media/img/MERCH/sudadera 4 delantera.png');
    });
    $(".verde-sudadera1").click(function(){
        $('.sudadera1').attr('src','media/img/MERCH/sudadera 3 delantera.png');
    });
    $(".blanco-sudadera1").click(function(){
        $('.sudadera1').attr('src','media/img/MERCH/sudadera 2 delantera.png');
    });
    // sudadera2
    $(".rosa-sudadera2").click(function(){
        $('.sudadera2').attr('src','media/img/MERCH/sudadera 2.png');
    });
    $(".morado-sudadera2").click(function(){
        $('.sudadera2').attr('src','media/img/MERCH/sudadera 3.png');
    });
    $(".verde-sudadera2").click(function(){
        $('.sudadera2').attr('src','media/img/MERCH/sudadera 4.png');
    });
    $(".negro-sudadera2").click(function(){
        $('.sudadera2').attr('src','media/img/MERCH/sudadera 5.png');
    });
    // zapatillas
    $(".rosa-zapatillas").click(function(){
        $('.zapatillas').attr('src','media/img/MERCH/zapatillas.png');
    });
    $(".morado-zapatillas").click(function(){
        $('.zapatillas').attr('src','media/img/MERCH/zapatillas3.png');
    });
    $(".verde-zapatillas").click(function(){
        $('.zapatillas').attr('src','media/img/MERCH/zapatillas4.png');
    });
    $(".negro-zapatillas").click(function(){
        $('.zapatillas').attr('src','media/img/MERCH/zapatillas2.png');
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
        // $(".contador").text(1);
    });
    $(".btn-comprar-1").click(function() {
        $("#ventana1, #ventana2, #ventana3, #ventana4, #ventana5, #ventana6, #ventana7, #ventana8").css("visibility","hidden");
        $("#ventana1, #ventana2, #ventana3, #ventana4, #ventana5, #ventana6, #ventana7, #ventana8").css("display","block");
        // $(".contador").text(1);
    });


    // BOTONES IMAGENES
    // BOTONES TALLA
    var buttons = $(".btn-talla");

    buttons.click(function() {
      buttons.removeClass("pink"); 
      $(this).addClass("pink"); 
    });
    $(".img-general").on("click", function () {
        $(".btn-talla").removeClass("pink"); 
    });

    // BOTONOES CANTIDAD
    $(document).ready(function(){
        // var contador = 1;
        // $(".btn-cantidad-mas").click(function(){
        //     contador++;
        //     $(".contador").text(contador);
        // })
        // $(".btn-cantidad-menos").click(function(){
        //     if (contador === 1) {
        //         $(".contador").text(contador);
        //     } else {
        //         contador--;
        //         $(".contador").text(contador);
        //     }
        // })
        $("#trigger1 , #trigger2 , #trigger3 , #trigger4 , #trigger5 , #trigger6 , #trigger7 , #trigger8").click(function() {
            var number = 1;
            $(".contador").textContent = number;
            $(".btn-cantidad-mas").click(function(){
                number++;
                $(".contador").text(number);
            })
            $(".btn-cantidad-menos").click(function(){
                if (number === 1) {
                    $(".contador").text(number);
                } else {
                    number--;
                    $(".contador").text(number);
                }
            })
            if ($(".btn-comprar-1").click) {
                number = 1;
                $(".contador").text(number);
            };
            if ($(".btn-close").click) {
                number = 1;
                $(".contador").text(number);
            };
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



