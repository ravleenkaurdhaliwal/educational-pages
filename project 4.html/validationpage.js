// Ravleen Kaur
// validation......
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        const fullname = document.getElementById("fullname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const comments = document.getElementById("comments");

        if (!fullname.value.trim()) {
            showError(fullname, "fullname_error", "Full name is required");
            isValid = false;
        } else {
            hideError(fullname, "fullname_error");
        }

        if (!/^\d{10}$/.test(phone.value.trim())) {
            showError(phone, "phone_error", "Phone number must be 10 digits");
            isValid = false;
        } else {
            hideError(phone, "phone_error");
        }

        if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
            showError(email, "email_error", "Invalid email address");
            isValid = false;
        } else {
            hideError(email, "email_error");
        }

        if (!comments.value.trim()) {
            showError(comments, "comments_error", "Comments are required");
            isValid = false;
        } else {
            hideError(comments, "comments_error");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, errorId, errorMessage) {
        const errorElement = document.getElementById(errorId);
        input.classList.add("error");
        errorElement.textContent = errorMessage;
        errorElement.style.display = "block";
        input.focus();
    }

    function hideError(input, errorId) {
        const errorElement = document.getElementById(errorId);
        input.classList.remove("error");
        errorElement.style.display = "none";
    }
});
