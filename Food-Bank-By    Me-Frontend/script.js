document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// login 2
    // Get modal elements
    const loginModal = document.getElementById('loginModal');
    const loginButton2 = document.getElementById('loginButton2');
    const closeButton = document.querySelector('.close');

    // Open the modal
    loginButton2.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    // Close the modal
    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close modal if clicked outside the content
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
    