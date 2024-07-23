document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menus");
    const icons = document.querySelectorAll(".menus i");

    // Function to remove the selected class from all nav links
    function removeSelectedClass() {
        navLinks.forEach(link => {
            link.classList.remove("selected");
        });
    }

    // Function to remove the hovered class from all nav links
    function removeHoveredClass() {
        navLinks.forEach(link => {
            link.classList.remove("hovered");
        });
    }

    // Function to highlight the current menu based on scroll position
    function highlightMenu() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

        removeSelectedClass();
        navLinks[index].classList.add("selected");
        icons.forEach(icon => {
            icon.style.color = "";
        });
        icons[index].style.color = "orangered";
    }

    // Add scroll event listener
    window.addEventListener("scroll", highlightMenu);

    // Initial call to highlight the correct menu item
    highlightMenu();

    // Function to handle click events on the menu items
    navLinks.forEach((link, index) => {
        link.addEventListener("click", function () {
            // Remove the selected class from all nav links
            removeSelectedClass();
            removeHoveredClass();

            // Add the selected class to the clicked nav link
            link.classList.add("selected");
            link.classList.add("hovered");

            // Change the color of the corresponding icon
            icons.forEach(icon => {
                icon.style.color = "";
            });
            icons[index].style.color = "orangered";
        });

        // Handle hover state
        link.addEventListener("mouseenter", function () {
            removeHoveredClass();
            link.classList.add("hovered");
        });

        link.addEventListener("mouseleave", function () {
            if (!link.classList.contains("selected")) {
                link.classList.remove("hovered");
            }
            ensureAtLeastOneHovered();
        });
    });

    // Ensure at least one menu item is always hovered
    function ensureAtLeastOneHovered() {
        if (!document.querySelector(".menus.hovered")) {
            const selected = document.querySelector(".menus.selected");
            if (selected) {
                selected.classList.add("hovered");
            } else {
                navLinks[0].classList.add("hovered");
            }
        }
    }

    // Ensure at least one menu item is always hovered on page load
    ensureAtLeastOneHovered();

    // Ensure at least one menu item is always hovered on page load
    if (!document.querySelector(".menus.selected")) {
        navLinks[0].classList.add("selected");
        icons[0].style.color = "orangered";
    }
});




//typing effect of the inner container starts..


//typing effect of the inner container ends..



// progress-bar effect starts..
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    if (scrollPercent === 0) {
        progressBar.style.display = 'none';
    } else {
        progressBar.style.display = 'block';
        progressBar.style.width = scrollPercent + '%';
    }
});

