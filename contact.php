<?php
// Email Setting
//=======================================
$admin_email = "marwa@elmanawy.info";
$from_name   = "MORACO";


if(isset($_POST['useremail'])) {
	
	 $user_name 	= strip_tags($_POST['username']);
	 $user_email 	= strip_tags($_POST['useremail']);
	 $user_phone 	= strip_tags($_POST['userphone']);
	 $comment_text 	= strip_tags($_POST['commenttext']);
	
	if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
	echo 5;
	exit;
	}
	else
	{
	$to  	   		= "$admin_email"; 
	$subject 		= "New Contact Information";
	$message		= "Name: $user_name <br/>";
	$message 		.= "Email: $user_email <br/>";
	$message 		.= "Phone: $user_phone <br/>";
	$message 		.= "Comment: $comment_text <br/>";
	$headers  		= "MIME-Version: 1.0\r\n";
	$headers 		.= "Content-type: text/html; charset=iso-8859-1\r\n";
	$headers 		.= "From:$from_name<$admin_email>";
	$headers 		.= "Reply-To: $admin_email\r\n"."X-Mailer: PHP/".phpversion();
	$send 			= mail($to, $subject, $message, $headers);
	echo '1';	
}
}


?>