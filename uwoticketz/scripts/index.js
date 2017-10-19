// URL of all the views.
var ticketView = "../php/tickets.php";
var computerView = "../php/computers.php";
var userView = "../php/users.php";
var submitView = "../php/submit.php";
var loginView = "../php/login.php";

// Track the current page the user is on.
// Display it again if they refresh the page.
// if(!sessionStorage.get("currentPage"))
// 	sessionStorage.setItem("currentPage", ticketView)

$(document).ready(function(){
	$.get(ticketView, function(data){
		$("#mainContent").html(data);
	});
});


//NAV-BAR NAVIGATION - triggers when the links are clicked.
$("#home").click(function(){
	$.get(ticketView, function(data){
		$("#mainContent").html(data);
	});

	// $.ajax({
	// 	url: "../php/index.php",
	// 	type: "get",
	// 	dataType: 'json',
	// 	success: function(data, status){
	// 		console.log(data);
	// 	},
	// 	error: function(xhr, desc, err){

	// 	}
	// });
});

$("#computersTab").click(function(){
	$.get(computerView, function(data){
		$("#mainContent").html(data);
	});
});

$("#usersTab").click(function(){
	$.get(userView, function(data){
		$("#mainContent").html(data);
	});
});

$("#submitTab").click(function(){
	$.get(submitView, function(data){
		$("#mainContent").html(data);
	});
});

$("#login").click(function(){
	$.get(loginView, function(data){
		$("#mainContent").html(data);	
	});
});