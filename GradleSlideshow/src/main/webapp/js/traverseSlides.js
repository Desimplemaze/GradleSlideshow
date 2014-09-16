/**
 * David Sam
 */

var slidePointer = 1;
var maxSlides = 6;
var minSlides = 1;

// REQUIREJS VERSION*****************************************
require(['jquery'], function($){
	/**
	 * loads the slide when button or link is pressed
	 * In the end we need to hide the picture and let it fade in
	 * 
	 * gets the list of anchor tags with attr data-index. then use that to get the value
	 */
	//console.log("Beginning "+ slidePointer);
	 $("a[data-index]").on("click", function () { 
         var slideNumber = $(this).attr("data-index"); 
         
        // console.log("after a clicked slideNumber="+slideNumber);
         //if not for parseInt, slidePointer will become a string and will not work after this.
         slidePointer = parseInt(slideNumber);
        // console.log("after a clicked slidePointer="+slidePointer);
         $( ".listContainer" ).load( "database/document"+slidePointer+".html").appendTo($(".listContainer")).hide().fadeIn(750); 
     });
	
	
	
	
	/**
	 * loads the next slide
	 * @param value
	 * if (+) loads next slide
	 * id (-) loads prev slide
	 */

	function loadNextSlide(value){
		slidePointer = slidePointer + parseInt(value);
		
		if(slidePointer < minSlides){
			slidePointer++;
		}
		else if (slidePointer > maxSlides){
			slidePointer--;
		}
		else{
			$( ".listContainer" ).load( "database/document"+slidePointer+".html").appendTo($(".listContainer")).hide().fadeIn(750); 
		}
	}
	
	// gets the next and uses the function
	$('.Next').click(function() {
	    loadNextSlide(1);
	  });
	// gets the prev and uses the function
	$('.Prev').click(function() {
	    loadNextSlide(-1);
	  });
});