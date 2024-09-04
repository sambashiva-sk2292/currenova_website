<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Save the data or send an email
  echo "Thank you for contacting us, $name!";
}
?>
