// index.js - purpose and description here
// Author: Rory
// Date: 4.29.2024

// Define Variables 
myTransport = ["friends cars", "bike", "walking", "bus"]

// Ride object
 myMainRide = {
    make: "Trek",
    model: "Ride+",
    color: "Grey",
    year: 2013,
  
    age:  function() {
      return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of Transport: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

