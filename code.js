// Get form and input elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Check if email and password are correct
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email === 'example@example.com' && password === 'password123') {
    // Generate session token and save in local storage
    const sessionToken = generateToken(32);
    localStorage.setItem('sessionToken', sessionToken);

    // Redirect to dashboard page or do something else
    window.location.href = '/dashboard.html';
  } else {
    alert('Incorrect email or password. Please try again.');
  }
});

// Session token generation function
function generateToken(length) {
  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return token;
}
