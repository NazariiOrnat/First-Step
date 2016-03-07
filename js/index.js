 $(document).ready(function (){

    $("#jhome").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });
    $("#jabout-me").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 1500);
    });
    $("#jprof-skills").click(function (){
        $('html, body').animate({
            scrollTop: $("#prof-sills").offset().top
        }, 1500);
    });
    $("#jcontact").click(function (){
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