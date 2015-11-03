$(document).ready( function() {
	
	for( i = 0; i < 16; i++ ) {
		
		for( j = 0; j < 16; j++ ) {
			$("#wrapper").append("<div class='cell'></div>");
		};
		$("#wrapper").append("<br>");
		
	}	
	
	$('.cell').on('mouseenter', function() {
		$(this).css('background-color', '#000');
	});
	$('button').on('click', function() {
		$(".cell").remove();
		$("br").remove();
		$("#wrapper").append("<br>");
		n = prompt("How big would you like your sketchpad?");
		for( i = 0; i < n; i++ ) {
		
			for( j = 0; j < n; j++ ) {
				$("#wrapper").append("<div class='cell'></div>");
			};
			$("#wrapper").append("<br>");
		
		}	
	});
	
});