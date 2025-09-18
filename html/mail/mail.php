<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;

//Set who the message is to be sent to
$to_email = "";
$to_name = "";
$subject = "";

$mail_content = '';
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ||  isset($_POST['phone']) )  {	
	$from_mail = $_POST['email'];
	$sender_name = $_POST['name'];	
	$sender_message = $_POST['message'];
	
	
	if(isset($_POST['phone'])) {
		$phone = $_POST['phone'];
		 $sender_phone  = "</br> SENDER PHONE NO: " .$phone;
	}
	else {
		$sender_phone ="";
		
	}
	
	$mail_content = "SENDER NAME : " . $sender_name . "</br> SENDER EMAIL : " . $from_mail . "</br>" . $sender_phone ."</br> SENDER MESSAGE: </br> " . $sender_message;
}

else if(  isset($_POST['book-email']) &&  isset($_POST['arrival-date']) &&  isset($_POST['departure-date']) &&  isset($_POST['book-room']) ){
	$from_mail = $_POST['book-email'];
	$sender_name = $_POST['book-email'];
	$book_arrival_date = $_POST['arrival-date'];	
	$book_departure_date = $_POST['departure-date'];
	$book_room = $_POST['book-room'];
	
	$mail_content = "EMAIL ID : " . $from_mail . "</br> ARRIVAL DATE : " . $book_arrival_date . "</br>" . "</br> DEPARTURE DATE: " . $book_departure_date ."</br> NO OF ROOMS: </br> " . $book_room;
}

else if(  isset($_POST['rest_name']) &&  isset($_POST['rest_email']) &&  isset($_POST['rest_phone']) &&  isset($_POST['rest_date'])  &&  isset($_POST['rest_people']) ){
	$from_mail = $_POST['rest_email'];
	$sender_name = $_POST['rest_name'];
	$book_phone = $_POST['rest_phone'];	
	$book_date = $_POST['rest_date'];
	$people = $_POST['rest_people'];
	
	$mail_content ="SENDER NAME : " . $sender_name . "</br> EMAIL ID : " . $from_mail . "</br> BOOKING DATE : " . $book_date . "</br>" . "</br> PHONE NO: " . $book_phone ."</br> NO OF PEOPLE: </br> " . $people;
}
/*yoga*/
else if( isset($_POST['yoga_name']) && isset($_POST['yoga_email']) && isset($_POST['yoga_message']) ||  isset($_POST['appointment_date']) )  {	
	$from_mail = $_POST['yoga_email'];
	$sender_name = $_POST['yoga_name'];	
	$sender_message = $_POST['yoga_message'];
	
	
	if(isset($_POST['appointment_date']) && !empty($_POST['appointment_date']) ) {
		$appointment_date = $_POST['appointment_date'];
		 $sender_date  = "</br> APPOINTMENT DATE: " .$appointment_date;
	}
	else {
		$sender_date ="";
		
	}
	
	$mail_content = "SENDER NAME : " . $sender_name . "</br> SENDER EMAIL : " . $from_mail . "</br>" . $sender_date ."</br> SENDER MESSAGE: </br> " . $sender_message;
}

else if( isset($_POST['event_name']) && isset($_POST['event_email']) &&  isset($_POST['event_phone']) )  {	
	$from_mail = $_POST['event_email'];
	$sender_name = $_POST['event_name'];	
	$sender_phone = $_POST['event_phone'];	
	
	$mail_content = "SENDER NAME : " . $sender_name . "</br> SENDER EMAIL : " . $from_mail . "</br> SENDER PHONE NO: " . $sender_phone;
}

else if(  isset($_POST['wed_name']) &&  isset($_POST['wed_email']) &&  isset($_POST['wed_phone'])  &&  isset($_POST['wed_people']) ){
	$from_mail = $_POST['wed_email'];
	$sender_name = $_POST['wed_name'];
	$book_phone = $_POST['wed_phone'];		
	$people = $_POST['wed_people'];
	
	$mail_content ="SENDER NAME : " . $sender_name . "</br> EMAIL ID : " . $from_mail . "</br>" . "</br> PHONE NO: " . $book_phone ."</br> NO OF PEOPLE: </br> " . $people;
}


if( !empty($mail_content) ) {
		
	$mail->SetFrom( $from_mail , $sender_name );
	$mail->AddReplyTo( $from_mail , $sender_name );
	$mail->AddAddress( $to_email , $to_name );
	//Set the subject line
	$mail->Subject = $subject;	
	
	$mail->MsgHTML( $mail_content );
	echo $mail->Send();
	exit;	
}