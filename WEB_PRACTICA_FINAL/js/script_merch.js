// $('#staticBackdrop').on('show.bs.modal', function (event) {
//     var id = $('#apartado-1')
//     var img = $('.imgppal').src
//     // Button that triggered the modal
//     // var recipient = button.data('whatever') // Extract info from data-* attributes
//     // // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     // var modal = $(this)
//     // modal.find('.modal-title').text('New message to ' + recipient)
//     // modal.find('.modal-body input').val(recipient)
//     if img== {

//     }
//   })








var modal2 = document.getElementsByClassName('modal-2');

// Get the button that opens the modal
var btn2 = document.getElementsByClassName("btn-2");
var modal1 = document.getElementsByClassName("modal-1")
// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal1.display = "none";
    modal2.style.display = "block";

}