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
    
    // $( '.horizontal-scroll' ).horizontalScroll({
    //     containerHeight: "300vh",
    //     paddingLeft: "3em" ,
        
    //     function(){
    //         $("div#gallery_community.horizontal-scroll").css(
    //             'margin-top', '0px');
    //     }
    // });
    
     

});

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})