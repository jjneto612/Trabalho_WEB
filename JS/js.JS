$(document).ready(function(){
    $('.comprar').click(function(){
        var alertBox = $('#cart-alert');
        alertBox.show();
        setTimeout(function(){
            alertBox.hide();
        }, 2000);
    });
});

document.getElementById('sendButton').addEventListener('click', function() {
    // Get the form element
    var form = document.getElementById('sendMessageForm');
    
    // You can add form validation here

    // Close the modal
    $('#exampleModal').modal('hide');

    // Display the success message
    var messageContainer = document.getElementById('successMessage');
    messageContainer.style.display = 'block';

    // Optionally clear the form
    form.reset();
});
