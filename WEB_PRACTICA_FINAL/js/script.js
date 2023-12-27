$(document).ready(function(){

    // $( "#menubtn" ).click(function() {
    //     $( "#links_menu" ).slideToggle( "slow", function() {
    //         $("#links_menu").css(
    //             {
    //                 "background-color": "#F4F4ED", 
    //                 "text-align": "left",
    //                 "width": "80%",
    //                 "position": "absolute",
    //                 "z-index": "1000",
    //                 "top": "6em",
    //                 "padding": "1em 4em",

                
    //             }
    //         );
    //     });
    // });

    $( "#menubtn" ).click(function() {
        var x = $("#mymenu");
        if (x.className === "menu") {
          x.className += " responsive";
        } else {
          x.className = "menu";
        }
    });

    // function myFunction() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //       x.className += " responsive";
    //     } else {
    //       x.className = "topnav";
    //     }
    //   }

});