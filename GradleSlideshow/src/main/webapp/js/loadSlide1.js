/**
 * 
 */

// here we need jquery and it is mapped to $ and the method is written. this is automatically run.
define(['jquery'], function($){
	
	//this function gets json and its data
	$.getJSON('js/slide.json', function(data) {
		   var slide1 = data.slides[0].location;
		   //document.getElementById("userdata").innerHTML=tblRow;
		   
		   //used jquery
		   //	       class                 to load                    and append
			$( ".listContainer" ).load(slide1).appendTo($(".listContainer"));
	       //$.each(data.person, function(i, f) {
	         // var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
	          // "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
	          // $(tblRow).appendTo("#userdata tbody");
	    //});

	   });
	
	
	
	
});
