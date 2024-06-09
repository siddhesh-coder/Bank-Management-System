// script.js

document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logout-button");
    
    logoutButton.addEventListener("click", function() {
        const confirmed = confirm("Are you sure you want to logout?");
        if (confirmed) {
            alert("You have successfully logged out.");
            // Redirect to the login page or perform other logout actions
            window.location.href = "login.html";
        }
    });
});
