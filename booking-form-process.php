<?php

	$errorMSG = "";

	// NAME
	if (empty($_POST["name"])) {
		$errorMSG = "Name is required. ";
	} else {
		$name = $_POST["name"];
	}

	// EMAIL
	if (empty($_POST["email"])) {
		$errorMSG .= "Email is required. ";
	} else {
		$email = $_POST["email"];
	}

	// Phone
	if (empty($_POST["phone"])) {
		$errorMSG .= "Phone is required. ";
	} else {
		$phone = $_POST["phone"];
	}

	// Date
	if (empty($_POST["date"])) {
		$errorMSG .= "Date is required. ";
	} else {
		$date = $_POST["date"];
	}

	// Time
	if (empty($_POST["time"])) {
		$errorMSG .= "Time is required. ";
	} else {
		$time = $_POST["time"];
	}

	// People
	if (empty($_POST["people"])) {
		$errorMSG .= "People is required. ";
	} else {
		$people = $_POST["people"];
	}

	// Child
	if (empty($_POST["child"])) {
		$child = '';
	} else {
		$child = $_POST["child"];
	}

	// MESSAGE
	if (empty($_POST["message"])) {
		$message = '';
	} else {
		$message = $_POST["message"];
	}

	$subject = 'Booking Inquiry from website';

	$EmailTo = "info@yourdomain.com"; // Replace with your email.
	
	// prepare email body text
	$Body = "";
	$Body .= "Name: ";
	$Body .= $name;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $email;
	$Body .= "\n";
	$Body .= "Phone: ";
	$Body .= $phone;
	$Body .= "\n";
	$Body .= "Date: ";
	$Body .= $date;
	$Body .= "\n";
	$Body .= "Time: ";
	$Body .= $time;
	$Body .= "\n";
	$Body .= "People: ";
	$Body .= $people;
	$Body .= "\n";
	$Body .= "Child: ";
	$Body .= $child;
	$Body .= "\n";
	$Body .= "Message: ";
	$Body .= $message;
	$Body .= "\n";

	// send email
	$success = @mail($EmailTo, $subject, $Body, "From:".$email);

	// redirect to success page
	if ($success && $errorMSG == ""){
	   echo "success";
	}else{
		if($errorMSG == ""){
			echo "Something went wrong :(";
		} else {
			echo $errorMSG;
		}
	}

?>