/**
 * 
 */

//js/jquery-ui.js, this is specific to the datePicker.
define(['jquery', 'js/jquery-ui.js'], function($){
	// prints out the message
	//$(".right").html(calander);
	
	$( ".right" ).append( "<p>Date: <input type='text' class='datepicker'></p>" );
	
	
	//waits until the append is done and loads this function for date picker
	$( document ).ready(function() {
		$(function() {
		    $( ".datepicker" ).datepicker();
		  });
	});
	

});
