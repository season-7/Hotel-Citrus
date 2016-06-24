$(document).ready(function()
    {
      $('.carousel').carousel({
        interval: 3000
      });
      $(window).load(function() {
        $('.flexslider').flexslider({
            selector: ".slides > div.tile",
            useCSS: false
        });
    });

  
    });
