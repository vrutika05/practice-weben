var $ = jQuery.noConflict();

$(document).ready(function() {
 
 $('.banner-slider').slick({
      autoplay: true,
      arrows: true,
      dots: true,
      fade: true,
      infinite: true,
      cssEase: 'ease-in-out'
  });
/*menu script start*/
    $('.enumenu_ul').responsiveMenu({
        onMenuopen: function () {}
    });
 /*menu script end*/

});

    

