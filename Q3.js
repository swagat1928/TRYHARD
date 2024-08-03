function showBookDetails() {
    document.getElementById('bookDetailsModal').style.display = 'block';
}

function closeBookDetails() {
    document.getElementById('bookDetailsModal').style.display = 'none';
}

function submitOrder(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const address = document.getElementById('address').value;
    const paymentDetails = document.getElementById('paymentDetails').value;
    const numCopies = document.getElementById('numCopies').value;

    if (customerName && address && paymentDetails && numCopies) {
        document.getElementById('orderResponse').innerText = 'Order Confirmed';
        document.getElementById('orderResponse').style.color = 'green';
    } else {
        document.getElementById('orderResponse').innerText = 'Order Pending';
        document.getElementById('orderResponse').style.color = 'red';
    }
}
