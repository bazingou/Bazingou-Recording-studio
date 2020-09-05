$(document).ready(function() {
    /****************stickman nav***************************/
    $('.js--valor').waypoint(function(direction) {
        if(direction =="down") {
            $('nav').addClass('stickman');
        } else {
            $('nav').removeClass('stickman');
        }
     },{
  offset: '60px;'
});
    /**************scrool to sign up ****************/
    $('.js--go-to-sign').click(function () {
        $('html, body').animate({scrollTop: $('.js--signup').offset().top},1000);
    });
    /**************scrool to sections*************/
     $('.js--show-more').click(function () {
        $('html, body').animate({scrollTop: $('.js--valor').offset().top},1000);
    });
    /*****************navigation scrool****************/
     $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    /****************************** nav icons *************************/
        $('.js-nav-icon').click(function() {
        var nav = $('.js--nav');
        nav.slideToggle(200);       
    });
    
});