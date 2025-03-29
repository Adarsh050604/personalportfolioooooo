<?php
// Enable error reporting for debugging (Remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize inputs
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(strip_tags(trim($_POST['subject'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.html?status=invalid_email");
        exit;
    }

    // Set recipient email
    $to = "adarshsajeevan050604@gmail.com"; // Replace with your email

    // Create email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Compose email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: contact.html?status=success");
    } else {
        header("Location: contact.html?status=error");
    }
    exit;
}
?>
