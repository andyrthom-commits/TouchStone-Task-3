const themeButton = document.getElementById("theme-toggle");

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "☀️";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        document.body.classList.remove("dark-mode");
        themeButton.textContent = "🌙";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "northStarBakeryTheme",
        isDark ? "dark" : "light"
    );

    setTheme(isDark);
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem("northStarBakeryTheme");
    setTheme(savedTheme === "dark");
}

themeButton.addEventListener("click", toggleTheme);

loadSavedTheme();

const contactForm = document.querySelector("form");

if (contactForm) {
    const nameInput = document.getElementById("customer-name");
    const emailInput = document.getElementById("customer-email");

    const nameError = document.getElementById("customer-name-error");
    const emailError = document.getElementById("customer-email-error");

    function checkName() {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            return false;
        }

        if (nameInput.value.trim().length < 2) {
            nameError.textContent = "Name must be at least 2 characters.";
            return false;
        }

        nameError.textContent = "";
        return true;
    }

    function checkEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email address.";
            return false;
        }

        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        }

        emailError.textContent = "";
        return true;
    }

    nameInput.addEventListener("input", checkName);
    emailInput.addEventListener("input", checkEmail);

    contactForm.addEventListener("submit", function(event) {
        const nameIsValid = checkName();
        const emailIsValid = checkEmail();

       if (!nameIsValid || !emailIsValid) {
    event.preventDefault();

    if (!nameIsValid) {
        nameInput.focus();
    } else {
        emailInput.focus();
    }
} else if (!contactForm.checkValidity()) {
    event.preventDefault();
    contactForm.reportValidity();
} else {
    event.preventDefault();
    alert("Your form passed validation. This demonstration form does not send an actual message.");
}
    });
}
