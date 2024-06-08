/*
   lab.js - My java script for HP House

   Author: Rory Gershen-Lewis
   Date: 2024
*/

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    var house = "";

    if (mod === 0) { 
        house = "                            Gryffindor";
    } else if (mod === 1) {
        house = "                            Hufflepuff";
    } else if (mod === 2) {
        house = "                            Ravenclaw";
    } else if (mod === 3) {
        house = "                            Slytherin";
 }

    return 'By the Judgment of the Hat, you are a ' +house;
}

document.getElementById("button").addEventListener('click', function() {
    var name= document.getElementById('input').value;
    document.getElementById('output').innerText= sortingHat(name);
});

