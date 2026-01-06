// script.js
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userType = document.getElementById('userType').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Validate all fields are filled
    if (!name || !email || !userType || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    // Display success message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Thank you for your feedback!';
    responseMessage.style.color = '#34f841';

    // (Optional) Send data to the server using fetch or AJAX
    // Example:
    // fetch('/submit-feedback', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, userType, rating, comments })
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));

    // Reset form after submission
    this.reset();
    document.getElementById('ratingValue').textContent = '3';
});

// Update rating value dynamically
document.getElementById('rating').addEventListener('input', function () {
    document.getElementById('ratingValue').textContent = this.value;
});
