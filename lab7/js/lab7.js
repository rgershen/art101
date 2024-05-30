// index.js - Title of Lab 7: FUNCTIONS!!
// Author: Rory
// Date: 5.3.2024


//new function sortUserName
function sortUserName() {
    var userName = window.prompt("What happens to be your name?");
    console.log("userName=", userName);
    //split
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

//output
document.writeln("Here ya go, here is your name!",
    sortUserName(), "</br>");
