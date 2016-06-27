$(function() {
	/*var d = new Date();
	if(d.getDate() == 4 || location.hash == "#/stream") {
		$("#streampanimix").css("display", "block");
		$("#streampanimix audio").attr("autoplay", "autoplay");
	}*/

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