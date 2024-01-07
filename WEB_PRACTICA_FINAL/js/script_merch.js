// $('#staticBackdrop').on('show.bs.modal', function (event) {
//     var id = $('#apartado-1')
//     var img = $('.imgppal').src
//     Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
//     if img== {

//     }
//   })





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




    // VENTANA MODAL
    // TITULO VENTANA
    // BOTONES IMAGENES
    // BOTONES TALLA
    $(".btn-talla-xs").click(function(){
        $(this).css('background-color', 'var(--color-rosa-hover)');
        $(this).css('color', 'var(--color-blanco-fondo)');
        var bgcolorxs = $('.btn-talla-xs.css').css('background-color');
    })
    $(".btn-talla-s").click(function(){
        $(this).css('background-color', 'var(--color-rosa-hover)');
        $(this).css('color', 'var(--color-blanco-fondo)');
        if (bgcolorxs == "var(--color-rosa-hover)") {
            ('.btn-talla-xs ').css("background-color", "var(--color-blanco-fondo)")
        }
    })
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

});


// var modal2 = document.getElementsByClassName('modal-2');

// // Get the button that opens the modal
// var btn2 = document.getElementsByClassName("btn-2");
// var modal1 = document.getElementsByClassName("modal-1")
// // When the user clicks the button, open the modal
// btn2.onclick = function() {
//     modal1.display = "none";
//     modal2.style.display = "block";

// }