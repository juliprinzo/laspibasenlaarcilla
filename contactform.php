<?php

if(isset($_POST['submit'])){
    $name= $_POST['name'];
    $surname= $_POST['surname'];
    $mailFrom= $_POST['mail'];
    $message= $_POST['message'];

    $mailTo="juliprinzo@gmail.com";
    $headers="From: ".$mailFrom;
    $txt="Recibiste un mail de".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}