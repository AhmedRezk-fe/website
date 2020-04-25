<?php
$to      = 'ahmed.rezk.fe@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From:ahmed.rezk.fe@gmail.com' . "\r\n" .
    'Reply-To: ahmed.rezk.fe@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>