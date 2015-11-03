color = ["#FF0000", "#00FF00", "#0000FF"]

$(document).ready( function() {
	
	for( i = 0; i < 16; i++ ) {
		
		for( j = 0; j < 16; j++ ) {
			$("#wrapper").append("<div class='cell'></div>");
		};
		$("#wrapper").append("<br>");
		
	}	
	
	$('#wrapper').on('mouseenter', '.cell', function() {
		$(this).css('background-color', "#000");
	});
	$('button').on('click', function() {
		$(".cell").remove();
		$("br").remove();
		$("#wrapper").append("<br>");
		n = prompt("How big would you like your sketchpad?");
		size = Math.floor((960 - 2 - (2 * n)) / n);
		for( i = 0; i < n; i++ ) {
		
			for( j = 0; j < n; j++ ) {
				$("#wrapper").append("<div class='cell'></div>");
			};
			$("#wrapper").append("<br>");
		
		};
		$(".cell").css({"height": size, "width": size});
	});
	
});