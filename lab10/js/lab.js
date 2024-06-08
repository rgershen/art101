/* jQuery New Elements

Author: Rory
Date: June 4th, 2024

*/

function generateRandomText() {
    const text = "bleep bloop blahh bregg"
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1))+ min;

    const randStart = Math.floor(Math.random() * (text.length - randLen +1));
return text.slice(randStart, randStart + randLen);

}

$(document).ready(function() {

    $("#make-convo").click(function(){

        const newText = generateRandomText();

        $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    });
});