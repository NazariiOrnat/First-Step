$(document).ready(function (){

    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset()
        }, 1500);
    });
    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-me").offset()
        }, 1500);
    });
    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#prof-sills").offset()
        }, 1500);
    });
    $(."scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset()
        }, 1500);
    });
});

$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});