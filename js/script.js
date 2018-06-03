$(function() {
	/*var d = new Date();
	if(d.getDate() == 4 || location.hash == "#/stream") {
		$("#streampanimix").css("display", "block");
		$("#streampanimix audio").attr("autoplay", "autoplay");
	}*/
	$(".planning-hidden").hide();

	$(".planning-hidden-trigger").click(function() {
		if(!$(this).hasClass("planning-hidden-open")) {
			$(".planning-hidden").slideDown();
			$(this).text("Masquer les événements passés");
		}
		else
		{
			$(".planning-hidden").slideUp();
			$(this).text("Afficher les événements passés");
		}

		$(this).toggleClass("planning-hidden-open");
	});

	$(window).resize(function() {
		setAspectRatio();
	});

	$(document).scroll(function() {
		if(document.documentElement.scrollTop > $( window ).height() - 2) {
			$('.backtotop').show();
		}
		else {
			$('.backtotop').hide();
		}
	});

	$('.nav-list a').hover(function() {
		$('body').css('background-image', 'url('+$(this).data("img")+')');
	});

	$('.backtotop').click(function() {
		$('html, body').animate({
        	scrollTop: 0
    	}, 300);
	});

	$('.nav-list a').click(function(e) {
		e.preventDefault();
		if(!$(this).hasClass('spacer')) {
			var pageUrl = $(this).attr("href");
			$(".eventbox").load(pageUrl + ' .eventbox', function() {
			    $(this).children(':first').unwrap();
			    $('html, body').animate({
		        	scrollTop: $(".eventbox").offset().top
		    	}, 600);
		    	window.history.pushState(null, null, pageUrl);
	    	    $(document).attr("title", $('.eventbox').data('title'));
			});
			$(".social-share").load(pageUrl + ' .social-share', function() {  
			    $(this).children(':first').unwrap();
			});
		}
	});

	$(document).mousemove(function(getCurrentPos){
	    var xCord = getCurrentPos.clientX;
	    var yCord = getCurrentPos.clientY;

	    var xPercent = xCord/window.innerWidth;
	    var yPercent = yCord/window.innerHeight;

	    var margX = 50-(xPercent*8); 
	    var margY = 50-(yPercent*15);

    	$('header').css('background-position', margX + '% ' + margY + '% ');
    	$('header a.mainlink img').css('margin-left', -((xPercent*100)/16-3.33333) + '% ');
	});

	if($('.nav a[href="'+document.location.pathname+'"]').data("img") != undefined) {
    	$('body').css('background-image', 'url('+$('.nav a[href="'+document.location.pathname+'"]').data("img")+')');
    }

	setAspectRatio();
});

function setAspectRatio() {
  $('iframe').each(function() {
    $(this).css('height', $(this).width() * 9/16);
  });
}

window.onpopstate = function(event) {
	if($('.nav a[href="'+document.location.pathname+'"]').length) {

		$(".eventbox").load(document.location.pathname + ' .eventbox', function() {
		    $(this).children(':first').unwrap();
		    $('html, body').scrollTop($(".eventbox").offset().top);
		    $('body').css('background-image', 'url('+$('.nav a[href="'+document.location.pathname+'"]').data("img")+')');
   			$(document).attr("title", $('.eventbox').data('title'));
		});
		$(".social-share").load(document.location.pathname + ' .social-share', function() {  
		    $(this).children(':first').unwrap();
		});
	}
	else {
  		window.location = document.location;
  	}
};