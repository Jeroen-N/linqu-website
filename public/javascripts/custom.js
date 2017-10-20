(function ($) {
    
    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav2 li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });

    // About section scroll
    $(".overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });

        $(".aboutlinqu a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });

    $(".navbar-toggle").on('click' ,function() {
        if(!$(".navbar-toggle").hasClass("top-nav-collapse")) {
         $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
         $(".navbar-fixed-top").removeClass("top-nav-collapse");   
        }
    });
    
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-right").removeClass("navbar-nav");
            $(".navbar-right").addClass("navbar-nav2");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-right").removeClass("navbar-nav2");
            $(".navbar-right").addClass("navbar-nav");
        }
    });
    
    // Testimonials Slider
    $('.bxslider').bxSlider({
      adaptiveHeight: true,
      mode: 'fade'
    });
    
})(jQuery);