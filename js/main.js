$( document ).ready(function() {
    
    // mobile navigation
    $('.hamburger-menu').click(function() { 
        $('.main-nav').toggleClass('mobile-nav--open');
    });

    $('.main-nav__link').click(function() { 
        $('.main-nav').removeClass('mobile-nav--open');
    });

    // scroll reveal
    window.sr = ScrollReveal();
    sr.reveal('.page-section', { duration: 1000, distance: '50px' });

    // smooth scroll
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    //slick slider
    $('.hero-slider').slick({
      autoplay: true,
    });

    $('.products-slider').slick({
      autoplay: true,
      slidesToShow: 7,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
          }
        },
      ]
    });
 });
