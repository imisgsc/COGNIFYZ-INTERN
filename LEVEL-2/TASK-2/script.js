document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('navToggle');
    const navbarLinks = document.getElementById('navbarLinks');

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});
