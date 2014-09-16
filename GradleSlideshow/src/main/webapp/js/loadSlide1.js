/**
 * 
 */

// here we need jquery and it is mapped to $ and the method is written. this is automatically run.
define(['jquery'], function($){
	$( ".listContainer" ).load( "database/document1.html").appendTo($(".listContainer"));
});
