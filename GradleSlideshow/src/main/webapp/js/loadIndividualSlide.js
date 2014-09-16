/**
 * 
 */

/**
 * loads the slide when button or link is pressed
 * In the end we need to hide the picture and let it fade in
 */

function loadIndividualSlide(slideNumber){
	$( ".listContainer" ).load( "database/document"+slideNumber+".html").appendTo($(".listContainer")).hide().fadeIn(750); 
	
	return slideNumber;
}
