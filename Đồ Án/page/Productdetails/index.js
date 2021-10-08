$(document).ready(function () {
    $('.small-images img').click(function () { 
        var image = $(this).attr('src');
        $('.producimages img').attr('src', image);
        
    });
});
$('.content-link button').click(function () {
    var idx = $(this).closest('.content-link').index();
    
    $('.content-link button').removeClass('active-link');
    $(this).addClass('active-link');

    $('.content-panel').hide();
    $('.content-panel').eq(idx).show();
});