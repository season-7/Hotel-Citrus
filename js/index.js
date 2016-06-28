$(document).ready(function()
    {
      $('.carousel').carousel({
        interval: 3000
      });
       $("#datepicker").datepicker();
      $(window).load(function() {
        $('.flexslider').flexslider({
            selector: ".slides > div.tile",
            useCSS: false
        });
    });


    });
