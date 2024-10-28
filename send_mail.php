<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST['product'];

    // Email recipient and subject
    $to = "youremail@example.com"; // Change to your email
    $subject = "New Cart Item Added";
    $message = "A potential client added " . $product . " to their cart.";

    // Headers
    $headers = "From: no-reply@sunflowerlaundry.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["message" => "Email sent successfully"]);
    } else {
        echo json_encode(["message" => "Failed to send email"]);
    }
} else {
    echo json_encode(["message" => "Invalid request"]);
}
?>
