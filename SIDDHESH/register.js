document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Generate unique SSN ID
    const generateSSN = () => {
      return "DSA" + Math.random().toString(36).slice(2, 11);
    };

    // Create user object
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: address,
      phone: phone,
      ssn: generateSSN(),
    };

    console.log(user);

    // localStorage.setItem('user', JSON.stringify(user));
    document.getElementById("registrationForm").reset();
  });
