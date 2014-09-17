/**
 * 
 */

//you can write a dependancy for jquery here if you want like.... define(['jquery'])
define(['jquery'], function($){
	var message = "";
	// just a loop
	for(var i = 0; i < 10; i++){
		message += "<p> SOME STUFF GOES HERE </p>"
	}
	// prints out the message
	$(".right").html(message);

});
