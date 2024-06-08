/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Author: Rory Gershen-Lewis
   Date: 2024
*/
//this is to add the button
$(".minor-section").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");

//this is to add an event listener
$(".highlight-button").click(function(){

    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
   
});

$(".highlight-button").click(function(){
    $(this).next().toggleClass("special");
});