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
