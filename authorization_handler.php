<?php 

header('Content-Type: text/html; charset=UTF-8');

$mysqli = mysqli_connect("localhost", "zhqcmbmo_0155", "MoRea_zsIn4", "zhqcmbmo_0155");
if ($mysqli == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
    // print("Соединение установлено успешно");
  $email = $_POST["email"];
  $pass = $_POST["pass"];

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email' AND `pass` = '$pass'");

  if ($result->num_rows != 0) {
    print("exist");
  } else {
    print("no");
  }
    
}