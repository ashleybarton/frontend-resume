var name = "Ashley Barton";
var role = "Software Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName).append(formattedRole);


// Need to change "audacity" to "Udacity"
var udacity= "audacity"
console.log(udacity.charAt(1).toUpperCase().concat(udacity.slice(2)));



//udacity = (udacity.charAt(1).toUpperCase()).append(udacity.slice(2));

//console.log(udacity);

/*

    var arr = ["this should", "be true?"];
    console.log(arr == true); //false

    var funThoughts = "something awesome";
    console.log(funThoughts);
    funThoughts = funThoughts.replace("awesome", "fun");
    console.log(funThoughts);
    $("#main").append(funThoughts);


    email = "foo@email.com";
    var newEmail = email.replace("email", "gmail");

    console.log(email);
    console.log(newEmail);
*/
