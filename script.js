document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        event.preventDefault();  // Prevent form submission if fields are empty
    } else {
        alert('Form submitted successfully!');
    }
});
