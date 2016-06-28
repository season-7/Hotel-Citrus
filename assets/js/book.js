$(document).ready(function()
    {
      $('.carousel').carousel({
        interval: 3000
      });
       $("#datepicker").datepicker();
       $("#datepicker2").datepicker();
       $('#contact_form').on('submit', function(e){

    		//place event handling logic here
    		 url = '/';
    		 data = $(this).serialize();

    		$.post(url, data);



    		//prevents the default behavior of the form
    		e.preventDefault();
	});

		// validate your form user inputs
		$('#contact_form').validate(
    		{
    			rules:
    			{
    				name:"required",
						phone:"required",
						date: "required",
    				email: {
    					required: true,
    					email: true,
    					maxlength: 30

    				}
    			},
    			messages:
    			{
    				name: "Please Enter Your Full Name",
    				email: {
    					required: "Email cannot be Empty!!",
    					email: "Please use this format user@somedomain.com",
    					maxlength: "Maximum length should be 30"
    				}
    			},
    			highlight: function(element)
    				{
    					$(element).addClass('error');
    				}
});

      $(window).load(function() {
        $('.flexslider').flexslider({
            selector: ".slides > div.tile",
            useCSS: false
        });
    });


    });
