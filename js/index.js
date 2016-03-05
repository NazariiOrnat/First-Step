$(document).ready(function (){

    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });
    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1500);
    });
    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#prof-sills").offset().top
        }, 1500);
    });
    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
});

$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});