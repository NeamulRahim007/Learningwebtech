<!DOCTYPE html>
<html>
<head>
    <title>Simple Form</title>
</head>
<body>
    <h2>Enter Your Name</h2>
    <form action="/submit" method="post" onsubmit="return validateForm()">
        <table for="name">Name:</table>
        <input type="text" id="name" name="name" required>
        <br>
        <input type="submit" value="Submit">
    </form>

    <script>
        function validateForm() {
            // Get the input value
            const nameInput = document.getElementById("name").value.trim();

            // Check if the input is empty
            if (nameInput.length === 0) {
                alert("Name can not be empty.");
                return false;
            }

            // Check if the input contains at least two words
            const words = nameInput.split(" ");
            if (words.length < 2) {
                alert("Name must contain at least two words.");
                return false;
            }

            // Check if the input contains only allowed characters (a-z, A-Z, ., -)
            const regex = /^[a-zA-Z.-]+$/;
            if (!regex.test(nameInput)) {
                alert("Name can only contain letters, periods (.), and hyphens (-).");
                return false;
            }

            // Check if the input starts with a letter
            if (!/^[a-zA-Z]/.test(nameInput)) {
                alert("Name must start with a letter.");
                return false;
            }

            // Validation successful
            return true;
        }
    </script>
</body>
</html>
