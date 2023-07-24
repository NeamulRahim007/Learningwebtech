<!DOCTYPE html>
<html>
<head>
    <title>Gmail Form Example</title>
</head>
<body>

    <h2>Enter your Gmail address:</h2>

    <form action="/submit_gmail" method="post" id="gmailForm">
        <table>Gmail:</table>
        <input type="email" id="gmail" name="gmail" placeholder="example@gmail.com" required>
        <br>
        <input type="submit" value="Submit">
    </form>

    <script>
        // Function to validate email format
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Function to handle form submission
        function validateForm(event) {
            event.preventDefault();
            
            const gmailInput = document.getElementById('gmail');
            const email = gmailInput.value.trim();
            const errorLabel = document.createElement('span');

            // Check if the email is empty
            if (email === '') {
                errorLabel.textContent = 'Email address cannot be empty.';
                errorLabel.style.color = 'red';
                gmailInput.parentNode.insertBefore(errorLabel, gmailInput.nextSibling);
                return;
            }

            // Check if the email is in a valid format
            if (!isValidEmail(email)) {
                errorLabel.textContent = 'Please enter a valid email address (e.g., anything@example.com).';
                errorLabel.style.color = 'red';
                gmailInput.parentNode.insertBefore(errorLabel, gmailInput.nextSibling);
                return;
            }

            // If the validation passes, submit the form
            document.getElementById('gmailForm').submit();
        }

        // Attach the event listener to the form
        document.getElementById('gmailForm').addEventListener('submit', validateForm);
    </script>

</body>
</html>
