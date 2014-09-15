/**
 * David Sam
 */

/**
 * loads the slide when button or link is pressed
 * In the end we need to hide the picture and let it fade in
 */
function loadIndividualSlide(slideNumber){ 
	$( ".listContainer" ).load( "database/document"+slideNumber+".html").appendTo($(".listContainer")).hide().fadeIn(750); 
}
 
/*
 * When the pages loads, we will load the first slide
 */
function loadFirstSlide(){
	$( ".listContainer" ).load( "database/document1.html").appendTo($(".listContainer")); 
}
window.onload = loadFirstSlide;
































/*
// The array to house all the documents
var pages = [ 'database/document1.html', 'database/document2.html',
		'database/document3.html' ];

//get multiple items and add them to the element.
function doLoad() {

	if (pages.length > 0) {

		// use shift to get the next page off the array
		$.get(pages.shift(), function(content) {
			// append content to .main
			$('.slides').append(content);
			// call do load to get the next entry
			doLoad();
		});
	}
};

// when page loads, so will this.
window.onload = doLoad;
*/