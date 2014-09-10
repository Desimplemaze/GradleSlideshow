/**
 * David Sam
 */
//init timeout
var slideToTimeout = 0;

/**
 * This function is to slide the img/divs to the next. 
 * @param old
 * 	current image
 * @param newLeft
 * 	distance of new image's current left
 */
function slideTo(old, newLeft) {
	// must clear the timeout otherwise will break.
    clearTimeout(slideToTimeout);
    
    //Higher these values are, slower it goes.
    var steps = 30;
    var timer = 30;
    
    //the position of the old img.
    //old.stlye.left = left postion of old.
    var oldLeft = parseInt(old.style.left) || 0;
    
    var diff = newLeft - oldLeft;
    //The step size is the diff between the left location of the new image and the left location of the old img.
    var stepSize = diff / steps;
    
    /**
     * This function is here because step() needs to be used in here and must be declared before usage.
     * Also it needs the attributes that only exists here.
     */
    function next() {
    	//determining the shift needed
        oldLeft += stepSize;
        //sets the left position of el
        old.style.left = oldLeft + "px";
        
        //if no if, runs forever, needs to reach 0
        if (--steps) {
            slideToTimeout = setTimeout(next, timer);
        }
    }
    next();
}


//the width of each slide (all will be 600px)
var slideWidth = 600;
// the slide number, will start at 0, but when function is called, will add or subtract
var slideNumber = 0;
/**
 * 
 * @param counter
 * 	Can be 1 or -1, depending if you want to slide to left or right
 */
function slideImg(counter) {
	// will keep track where you are in the slides
    slideNumber += counter;
    
    var theSlides = document.getElementById("list");
    // uses the helper function to do the sliding
    // theslides= the list of slides, starts wiht first
    // -slideNumber * slideWidth this locates the exact location of where you are currently and slides it.
    slideTo(theSlides, -slideNumber * slideWidth);
}