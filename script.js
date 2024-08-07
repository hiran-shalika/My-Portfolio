
const typed=new Typed('.multiple-text',{
    strings:['Web Developer', 'Content Creator','Blogger'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,

});

// about 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Check if the element is an image or text and add the corresponding class
            if (entry.target.classList.contains('hidden-img')) {
                entry.target.classList.add('show-img');
            } else if (entry.target.classList.contains('hidden-text')) {
                entry.target.classList.add('show-text');
            }
        } else {
            // Remove the classes accordingly
            if (entry.target.classList.contains('hidden-img')) {
                entry.target.classList.remove('show-img');
            } else if (entry.target.classList.contains('hidden-text')) {
                entry.target.classList.remove('show-text');
            }
        }
    });
});

// Select all hidden elements and observe them
const hiddenElements = document.querySelectorAll('.hidden-img, .hidden-text');
hiddenElements.forEach((el) => observer.observe(el));

// services 
document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.single-service');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // Adjust this value for when the animation should trigger

        services.forEach(service => {
            const box = service.getBoundingClientRect();
            const boxTop = box.top;

            if (boxTop < triggerBottom) {
                service.classList.add('visible'); // Add the class to trigger the animation
            } else {
                service.classList.remove('visible'); // Remove class if not in view
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run on page load to check if elements are already in view
});

document.addEventListener("DOMContentLoaded", function() {
    const portfolios = document.querySelectorAll('.single-portfolio'); // Select portfolio items

    function checkVisibility(elements) {
        const triggerBottom = window.innerHeight * 0.8; // Adjust this value for when the animation should trigger

        elements.forEach(element => {
            const box = element.getBoundingClientRect();
            const boxTop = box.top;

            if (boxTop < triggerBottom) {
                element.classList.add('visible'); // Add the class to trigger the animation
            } else {
                element.classList.remove('visible'); // Remove class if not in view
            }
        });
    }

    window.addEventListener('scroll', function() {
        checkVisibility(portfolios); // Check visibility for portfolio items
    });

    checkVisibility(portfolios); // Run on page load for portfolio items
});