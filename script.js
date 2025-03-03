document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Add to cart functionality (basic example)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Implement your cart logic here.
            alert('Item added to cart!');
        });
    });

    // Newsletter subscription (basic example)
    const newsletterForm = document.querySelector('.newsletter-form');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Implement your newsletter subscription logic here.
        alert(`Subscribed with email: ${email}`);
        emailInput.value = ''; // Clear input
    });
});
// Example product data (you'd likely fetch this from a database or API)
const products = [
    {
        id: 1,
        name: 'Intel Core i7-12700K',
        price: 350.00,
        image: 'placeholder-product1.jpg',
        description: '12th Gen Intel Core i7 processor.',
    },
    {
        id: 2,
        name: 'Corsair Vengeance 32GB DDR5',
        price: 200.00,
        image: 'placeholder-product2.jpg',
        description: '32GB DDR5 RAM kit.',
    },
    {
        id: 3,
        name: 'Samsung 980 Pro 1TB NVMe SSD',
        price: 150.00,
        image: 'placeholder-product3.jpg',
        description: '1TB NVMe SSD with high-speed performance.',
    },
    {
        id: 4,
        name: 'Nvidia GeForce RTX 3080',
        price: 700.00,
        image: 'placeholder-product4.jpg',
        description: 'High end graphics card.',
    },
    {
        id: 5,
        name: 'ASUS ROG Strix Z690-A',
        price: 250.00,
        image: 'placeholder-product5.jpg',
        description: 'High end motherboard.',
    },
    {
        id: 6,
        name: 'Corsair RM850x',
        price: 120.00,
        image: 'placeholder-product6.jpg',
        description: '850W Power Supply.',
    }
];