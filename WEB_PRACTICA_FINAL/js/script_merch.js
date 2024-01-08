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




    // VENTANA MODAL
    
    // TITULO VENTANA
    var exampleModal = document.getElementsByClassName('modal-prueba')
    // if (exampleModal) {
        var shorts = document.getElementById("modal-title").textContent;
        shorts = "Shorts";
        exampleModal.addEventListener('show.bs.modal', shorts)
        $(".galeria > .btn ").click(function(){
            // Button that triggered the modal
            // var button = $(".trigger") ;
            // Extract info from data-bs-* attributes
            // var recipient = $(".trigger").val($(".trigger").attr("name"));
            // If necessary, you could initiate an Ajax request here
            // and then do the updating in a callback.

            // Update the modal's content.
            // var modalTitle =  $(".modal-title");
            // var modalBodyInput = exampleModal.querySelector('.modal-body input');
                // if (recipient.textContent = "Shorts"){
                //     modalTitle.textContent = "Shorts"
                // }
            
            document.getElementById("modal-title").textContent = "Shorts";
            // modalTitle.textContent = `New message to ${recipient}`;
            // modalBodyInput.value = recipient
            console.log("Hello");
        
        // })
    // }



    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
      exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.
    
        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')
    
        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
      })
    }




    
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

