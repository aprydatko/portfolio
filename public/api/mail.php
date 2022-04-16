<?php
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

	$hasError = true;

	if ($_POST["name"]) {
		$to = 'artyrpridatko@gmail.com';
		$subject = 'Тема сообщения';
		$message = "Line 1\r\nLine 2\r\nLine 3";
		$message = wordwrap($message, 70, "\r\n");

		mail($to, $subject, $message);
		$hasError = false;
	}

	$data = $hasError ?  'error' => $hasError, 'message' => 'Ошибка отправки сообщения' : 'status' => 'ok';

	echo json_encode($data);
?>