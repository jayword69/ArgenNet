document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkout-form');

    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        // Implement your order processing logic here.
        alert(`Order placed! Name: ${name}, Email: ${email}, Address: ${address}`);
        // Redirect to confirmation page, etc.
    });
});