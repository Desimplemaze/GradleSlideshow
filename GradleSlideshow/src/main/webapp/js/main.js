/**
 * This is the first module
 * The very first JS file that will load when the page is loaded
 */

//defining where is jquery
requirejs.config({
        paths : {
            jquery : '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min'
        }
    });

/**
 * 2 primary methods, require and define
 * $ = the thing in the array
 * there is no need for .js because it is asking for module name, not name of the file
 */
// this app will require the jquery AND your regular js file.
require(['loadSlide1', 'traverseSlides', 'calander'], function(loadSlide1, traverseSlides, calander){
	// I did not put anything here because you dont need it, the loadSlide1 does something and thats all you need to do.
	// All i need now is the message
	
});