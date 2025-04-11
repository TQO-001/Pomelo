document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = toggleBtn.querySelector("i");
    const currentTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set theme and icon on page load
    if (currentTheme === "dark" || (!currentTheme && systemPrefersDark)) {
        document.body.classList.add("dark");
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        document.body.classList.remove("dark");
        icon.classList.replace("fa-sun", "fa-moon");
    }

    toggleBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Swap icon
        icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
    });
});
