
        // Smooth scrolling to sections
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

        // Simple slider functionality
        const sliderContent = document.querySelector('.slider-content');
        const messages = [
            "Let's create something amazing together",
            "I'd love to hear your thoughts",
            "Get in touch for collaborations",
            "Your feedback inspires me"
        ];
        let currentMessage = 0;

        function changeSliderMessage() {
            currentMessage = (currentMessage + 1) % messages.length;
            sliderContent.textContent = messages[currentMessage];
            sliderContent.style.opacity = 0;
            setTimeout(() => {
                sliderContent.textContent = messages[currentMessage];
                sliderContent.style.opacity = 1;
            }, 500);
        }

        setInterval(changeSliderMessage, 3000);

        // experiences slider functionality
        const experienceSlider = document.querySelector('.experience-slider');
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            experienceSlider.scrollTo({
                left: currentSlide * experienceSlider.offsetWidth,
                behavior: 'smooth'
            });
        }

        setInterval(nextSlide, 3200); 

    
       
        // Hide block content on hover
        const gridBlocks = document.querySelectorAll('.grid-block');
        gridBlocks.forEach(block => {
            block.addEventListener('mouseenter', function() {
                const paragraphs = this.querySelectorAll('p:not(.block-title)');
                paragraphs.forEach(p => {
                    p.style.opacity = '0';
                    p.style.height = '0';
                    p.style.margin = '0';
                    p.style.padding = '0';
                });
            });
            
            block.addEventListener('mouseleave', function() {
                const paragraphs = this.querySelectorAll('p:not(.block-title)');
                paragraphs.forEach(p => {
                    p.style.opacity = '1';
                    p.style.height = '';
                    p.style.margin = '';
                    p.style.padding = '';
                });
            });
        });

// Add this script to handle Safari's viewport height quirk
document.documentElement.style.setProperty(
  '--vh', 
  `${window.innerHeight * 0.01}px`
);

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty(
    '--vh', 
    `${window.innerHeight * 0.01}px`
  );
});

 // Feature detection for ScrollTimeline
 if (!CSS.supports('animation-timeline: view()')) {
            const elements = document.querySelectorAll('.description-middle');
            elements.forEach(el => {
                el.style.animation = 'appear 0.8s ease-out forwards';
            });
            console.log("Using fallback animation");
        }
// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    const educationElement = document.querySelector('.animate-education');
    
    if (!educationElement) return;

    // Set up the Intersection Observer with scrollbar compensation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation
                entry.target.classList.add('animated');
                
                // Optional: Stop observing after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px calc(-1 * (100vw - 100%)) 0px 0px' // Scrollbar compensation
        // root: document.documentElement // Explicit root element
    });

    // Start observing
    observer.observe(educationElement);

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        educationElement.classList.add('animated');
    }
});
