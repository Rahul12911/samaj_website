document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true; // Flag to track form validity

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none';
    });

    // Validate Full Name
    const name = document.getElementById('name').value.trim();
    if (name === '' || !/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid full name (letters and spaces only).';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value.trim();
    if (phone === '' || !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    // Validate District
    const district = document.getElementById('district').value.trim();
    if (district === '') {
        document.getElementById('districtError').textContent = 'Please enter your district name.';
        document.getElementById('districtError').style.display = 'block';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === '' || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate Address
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        document.getElementById('addressError').textContent = 'Please enter your address.';
        document.getElementById('addressError').style.display = 'block';
        valid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value.trim();
    if (age === '' || isNaN(age) || age < 18|| age > 100) {
        document.getElementById('ageError').textContent = 'Please enter a valid age between 18 and 100.';
        document.getElementById('ageError').style.display = 'block';
        valid = false;
    }

    // Validate Gender
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        document.getElementById('genderError').style.display = 'block';
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        alert('Registration successful!');
        this.submit();
    }
});
