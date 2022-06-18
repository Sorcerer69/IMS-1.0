// Sides in the side navigation bar by increasing its width. 
function openNav() {
    document.getElementById("sideBar").style.width = "350px";       //sets the width of sidenav to 300px.
    document.getElementById("main").style.marginLeft = "350px";    //sets the right margin of main to 300px (slides the web page to show pushing effect).
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";        //changes background color to show opacity effect.
}

// Closes the side navigation bar bar by setting its width to zero. 
function closeNav() {
    document.getElementById("sideBar").style.width = "0";       //sets the width of sidenav to 0(hides the side navigation bar). 
    document.getElementById("main").style.marginLeft = "50px";    //sets the right margin of main to 0.
    document.body.style.backgroundColor = "#fcfcfc";            //changes the background color of body back to normal.
}

// validateForm() is called when the form gets submitted and this function gets all the values from the fields and put them in the variables. 
function validateForm() {
    var fName = document.forms["queryForm"]["fName"].value;
    var lName = document.forms["queryForm"]["lName"].value;
    var email = document.forms["queryForm"]["email"].value;
    var query = document.forms["queryForm"]["query"].value;
    var queryType = document.forms["queryForm"]["queryType"].value;

    // Checks if the reuired necessary fields have been filled or not before validating it. 
    if (fName == "" || lName == "" || email == "" || query == ""){
        alert("Empty fields found. Please fill in the empty fields.");      //The user is asked to input necessary fields.
    }
    else {
        alert("Thank you for the query. I will reach out to you ASAP.");    //The user is notified abut the submission of his query.
    }
}

