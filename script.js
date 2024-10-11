// Example: Simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault(); // Stop the form submission
    }
});