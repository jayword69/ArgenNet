document.addEventListener('DOMContentLoaded', function() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');

    // Example cart data (you'd likely fetch this from local storage or a server)
    const cart = [
        {
            id: 1,
            name: 'Intel Core i7-12700K',
            price: 350.00,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Corsair Vengeance 32GB DDR5',
            price: 200.00,
            quantity: 2,
        },
    ];

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalDiv.style.display = 'none';
    } else {
        let total = 0;
        let cartItemsHTML = '';

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItemsHTML += `
                <div class="cart-item">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: $${itemTotal.toFixed(2)}</p>
                </div>
            `;
        });

        cartItemsDiv.innerHTML = cartItemsHTML;
        cartTotalDiv.querySelector('p').textContent = `Total: $${total.toFixed(2)}`;
    }
});