$(document).ready(function(){
    $('.comprar').click(function(){
        var alertBox = $('#cart-alert');
        alertBox.show();
        setTimeout(function(){
            alertBox.hide();
        }, 2000);
    });
});