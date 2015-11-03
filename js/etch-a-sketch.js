color = ["#FF0000", "#00FF00", "#0000FF"]

$(document).ready( function() {
	
	for( i = 0; i < 16; i++ ) {
		$("#wrapper").append("<div class='row'></div>");
	};
	for( i = 0; i < 16; i++ ) {
		$(".row").append("<div class='cell'></div>");
	};
	
	$('#wrapper').on('mouseenter', '.cell', function() {
		$(this).css('background-color', "#000");
	});
	
	$('button').on('click', function() {
		$(".row").remove();
		n = prompt("How big would you like your sketchpad?");
		size = Math.floor((1280 - 1 - (2 * n)) / n);
		for( i = 0; i < n; i++ ) {
			$("#wrapper").append("<div class='row'></div>");		
		};
		for( i = 0; i < n; i++ ) {
			$(".row").append("<div class='cell'></div>");		
		};
		$(".cell").css({"height": size, "width": size});
	});
	
});