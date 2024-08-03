# TRYHARD
This is something.
trying to do somethings.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Book Order</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Book Order Form</h1>
        <div class="book-details">
            <div class="book-thumbnail">
                <img src="book-image.jpg" alt="Book Image" id="bookImage" onclick="showBookDetails()">
            </div>
            <div class="book-info">
                <h2 id="bookTitle">Book Title</h2>
                <p id="bookDescription">This is a brief description of the book.</p>
                <div id="bookReviews">
                    <h3>Reviews:</h3>
                    <p>⭐️⭐️⭐️⭐️☆ - Great book! Very informative.</p>
                    <p>⭐️⭐️⭐️⭐️⭐️ - A must-read for everyone!</p>
                </div>
            </div>
        </div>

        <div id="bookDetailsModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeBookDetails()">&times;</span>
                <h2 id="modalBookTitle">Book Title</h2>
                <p id="modalBookDescription">This is a detailed description of the book.</p>
                <h3>Topics Covered:</h3>
                <ul id="modalBookTopics">
                    <li>Introduction</li>
                    <li>Chapter 1: Basics</li>
                    <li>Chapter 2: Advanced Topics</li>
                    <li>Conclusion</li>
                </ul>
                <p id="modalBookAdditionalInfo">Additional details about the book.</p>
            </div>
        </div>

        <form id="orderForm" onsubmit="submitOrder(event)">
            <div class="form-group">
                <label for="customerName">Full Name:</label>
                <input type="text" id="customerName" name="customerName" required>
            </div>

            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" rows="4" required></textarea>
            </div>

            <div class="form-group">
                <label for="paymentDetails">Payment Details:</label>
                <input type="text" id="paymentDetails" name="paymentDetails" placeholder="Card Number" required>
            </div>

            <div class="form-group">
                <label for="numCopies">Number of Copies:</label>
                <input type="number" id="numCopies" name="numCopies" min="1" value="1" required>
            </div>

            <div class="form-group">
                <button type="submit">Place Order</button>
            </div>
        </form>

        <div id="orderResponse" class="response"></div>
    </div>
</body>
</html>
