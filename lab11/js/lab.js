/* jQuery New Elements

Author: Rory
Date: June 9th, 2024

*/

function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$(document).ready(function() {
    $("#submit").click(function(){
        const userName= $("#user-name").val();
        const userNameSorted = sortString(userName);

        $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    });
});