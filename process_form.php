<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecting and sanitizing input data
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Print the collected data for demonstration purposes
    echo "First Name: " . $first_name . "<br>";
    echo "Last Name: " . $last_name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Subject: " . $subject . "<br>";
    echo "Message
