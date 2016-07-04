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

	setAspectRatio();
});

function setAspectRatio() {
  $('iframe').each(function() {
    $(this).css('height', $(this).width() * 9/16);
  });
}