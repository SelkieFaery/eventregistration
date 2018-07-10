/*
		Your Name: Sheila Percy
		Last Modified Date: 07/09/2018
		File: event_registration.js
		File Description: The purpose of this file is to provide funtionality for a ticketing 
				  System, as well as form validation.  
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

//variable to store the total cost
var total;

function calculateTotal() {
	//variable to store the number of tickets entered by user
	var tickets = document.getElementById("numTickets").value;
	//variable to store contact information
	var contact = document.getElementById("contactInformation");
	//variable to store the total cost
	total = document.getElementById("totalCost");
	//if statement to determine if tickets requested is within acceptable range
	//This portion will run if customer requests between 1 and 3 tickets
	if (tickets >= minTickets && tickets <=maxTickets) {
		//calculates total cost of tickets and displays it in money format.
		total.value = "$" + (tickets * (costPerTicket + ticketSurcharge)).toFixed(2);
		//Displays contact info portion of form 
		contact.style.display = "block";
		//clears error message, if one was displayed
		document.getElementById("msgTickets").innerHTML = "";
		//clears yellow background in numTickets field
		document.getElementById("numTickets").style.background = "";
	//This portion will run if customer requests anything else
	} else {
		//Displays error message
		document.getElementById("msgTickets").innerHTML = "You can only buy between 1 and 3 tickets.";
		//Changes backgroiund of text field for ticket imput yellow
		document.getElementById("numTickets").style.background = "yellow";
		//Clears contact info portion of form
		contact.style.display = "";
	}
}
//Function called when submit button is clicked
function completePurchase() {
	//Tests if name is blank
	if (document.getElementById("name").value == "") {
		//Displays error message for name
		document.getElementById("msgname").innerHTML = "Please enter your name."; 
		//Changes background of name text input field to yellow
		document.getElementById("name").style.background = "yellow";
		//returns false
        	return false;
	//Tests if name includes anything other than letters a-z
	} else if (!document.getElementById("name").value.match(/^[a-zA-Z]+$/)) {
		//displays error message for name
		document.getElementById("msgname").innerHTML = "Please use only letters A - Z for first name.";
		//Changes background of name text field to yellow
		document.getElementById("name").style.background = "yellow";
		//returns false
        	return false;
	//Tests if email is blank
	} else if (document.getElementById("email").value === "") {
		///clears error message for name
		document.getElementById("msgname").innerHTML = "";
		//sets background of name text field to default
		document.getElementById("name").style.background = "";
		//displays error message for email
		document.getElementById("msgemail").innerHTML = "Please enter your email address.";
		//Changes background of email text field to yellow
		document.getElementById("email").style.background = "yellow";
		//returns false
        	return false;
	//Tests if text entered is a valid email address
	} else if (!document.getElementById("email").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
		///clears error message for name
		document.getElementById("msgname").innerHTML = "";
		//sets background of name text field to default
		document.getElementById("name").style.background = "";
		//displays error message for email
		document.getElementById("msgemail").innerHTML = "You have entered an invalid e-mail address.";
		//Changes background of email text field to yellow
		document.getElementById("email").style.background = "yellow";
		//returns false
        	return false;
	//runs if no error is detected
	} else {
		//sets background of name text field to default
		document.getElementById("name").style.background = "";
		//sets background of email text field to default
		document.getElementById("email").style.background = "";
		///clears error message for name
		document.getElementById("msgname").innerHTML = "";
		///clears error message for email
		document.getElementById("msgemail").innerHTML = "";
		//displays alert message displaying total cost
		alert("Thank you for your purchase.  Your total cost is " + total.value + ". Please allow up to 24 hours for electronic delivery.");
	}
}

