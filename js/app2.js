setTimeout(function() {
    $('.h-video').fadeIn('slow');
}, 2000);

$( document ).ready(function() {
    $('#icons').fadeIn(1500);
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.h-video, .slogan').css({
        'opacity': ((800 - scrollTop) / 800) 
    });
});