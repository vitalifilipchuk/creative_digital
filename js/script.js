$( document ).ready(function() {
    $(".scrolldown-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".form-block").offset().top
	    }, 1000);
	});
	$(".scrolldown-text").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".form-block").offset().top
	    }, 1000);
	});
});