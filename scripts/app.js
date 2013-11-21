/*jQuery plugin Parallax
 -----------------------------------
 * Course: WEBDAD-I
 * Programmed by: Matthias Mandiau
 * Last updated: 20/11/2013
 * Version v0.1.0
 -----------------------------------
 * App.js
 * In opdracht van Arteveldehogeschool
 * 2013-2014
 -----------------------------------
 */



(function(){
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#container1').parallax("50%", 0.1);
    $('#container2').parallax("50%", 0.1);
    $('.bg').parallax("40%", 0.1);
    $('.bg2').parallax("30%", 3);
    $('#container3').parallax("50%", 0.3);
    $('#container4').parallax("50%", 0.3);
    $('#container5').parallax("50%", 0.3);
    $('#container6').parallax("50%", 0.3);
}) ();

    $('.menu-toggle').click(function(ev){
        ev.preventDefault();
        $('#main-navigation ul').slideToggle(600, 'linear');
        return false;
    });
        //SCROLL TO TOP
        $('.scrolltotop').click(function(ev){
            ev.preventDefault();
            $('html, body').animate({scrollTop:0},600);
            return false;
        });

        //FADE IN AND OUT SCROLLTOTOP
        $(window).scroll(function(ev){
            if($(this).scrollTop() > 60)
                $('.scrolltotop').fadeIn();
            else
                $('.scrolltotop').fadeOut();
        });

        //SCROLL TO TOP
        $(window).resize(function(ev){
            ev.preventDefault();
            if($(this).width() > 480)
                $('#main-navigation ul').css('display', 'block');
            else
                $('#main-navigation ul').css('display', 'none');
            return false;

        }) ();



