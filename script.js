document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle order form submission
    const orderForm = document.getElementById('orderForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    const customerNameSpan = document.getElementById('customerName');

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const orderDetails = document.getElementById('order-details').value;

        // In a real application, you would send this data to a server
        // For this example, we'll just log it to the console and show a confirmation
        console.log('Order Details:');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Address: ${address}`);
        console.log(`Order: ${orderDetails}`);

        // Display confirmation message
        customerNameSpan.textContent = name;
        orderForm.classList.add('hidden'); // Hide the form
        orderConfirmation.classList.remove('hidden'); // Show the confirmation

        // Optionally, reset the form after a short delay or allow user to make another order
        // setTimeout(() => {
        //     orderForm.reset();
        //     orderForm.classList.remove('hidden');
        //     orderConfirmation.classList.add('hidden');
        // }, 5000); // Reset after 5 seconds
    });

    // Scroll to Top Button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Simple "Add to Cart" alert for demonstration
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.previousElementSibling.previousElementSibling.textContent; // Gets the h3 content
            alert(`"${itemName}" added to your imaginary cart!`);
        });
    });
});