$(document).ready(function(){

    AOS.init();

    $(".hamburger").click(function(){
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

    $(".section_title").hover(
        function(){
            $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha_LED.png');
        },
        function(){
            $(".section_title > img.LED_flecha").attr('src', 'media/img/flecha.png');
        }
    );
    
});

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
