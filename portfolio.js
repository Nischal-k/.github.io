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

    ensureAtLeastOneHovered();


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


// AI chat box // 
// Toggle the chat box visibility
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}


// Typewriter animation
document.addEventListener('DOMContentLoaded', function() {
    const lines = [
        { text: "Hi my name is ", orange: "Nischal khadka", delay: 500 },
        { text: "I'm a Wonderer experiencing ", orange: " life at it's pace", delay: 1500 },
        { text: "& Working as ", orange: " SDR at Veel.", delay: 2500 },
        { text: "Welcome ", orange: "to my space", delay: 2500 }
    ];

    lines.forEach((line, index) => {
        const lineElement = document.querySelector(`.line${index + 1}`);
        const textSpan = lineElement.querySelector('.typing-text');
        const orangeSpan = lineElement.querySelector('.orange-word');
        
        // Initial delay
        setTimeout(() => {
            // Type the regular text
            typeWriter(textSpan, line.text, () => {
                // Then type the orange text
                typeWriter(orangeSpan, line.orange);
            });
        }, line.delay);
    });

    function typeWriter(element, text, callback) {
        let i = 0;
        const speed = 50; // typing speed in ms
        
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback();
            }
        }
        
        element.textContent = '';
        typing();
    }
});
