document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if (email && password) {
        console.log("Attempting login for:", email);
        alert("Login button clicked! (This is a front-end demo)");
    } else {
        alert("Please fill in all fields.");
    }
});
