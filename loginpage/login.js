document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Placeholder for successful login
    alert('Login successful!'); 

    // Ensure the redirection URL is correct
    window.location.href = 'http://localhost:8082/homepage/'; // Adjust this URL as needed
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Redirecting to password recovery...');
});

document.getElementById('loginWithPhone').addEventListener('click', function() {
    alert('Login with Phone Number functionality not implemented yet.');
});

document.getElementById('loginWithOTP').addEventListener('click', function() {
    alert('Login with OTP functionality not implemented yet.');
});
