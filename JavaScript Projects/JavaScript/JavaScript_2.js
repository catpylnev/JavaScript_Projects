document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (name.value.trim() === '') {
            alert('Name field is required.');
            e.preventDefault();
        }
        
        if (email.value.trim() === '') {
            alert('Email field is required.');
            e.preventDefault();
        } else if (!isValidEmail(email.value)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
        
        if (message.value.trim() === '') {
            alert('Message field is required.');
            e.preventDefault();
        }
    });
    
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
