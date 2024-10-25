document.addEventListener('DOMContentLoaded', () => {
    const feedbackImage = document.getElementById('feedbackImage');
    const contactWidget = document.getElementById('contact-widget');
    const clickImage = document.getElementById('clickImage');
    const clickMeButton = document.querySelector('button.btn'); // Select the specific button

    // Function to hide feedback image
    function hideFeedback() {
        feedbackImage.classList.add('hidden');
    }

    // Function to show feedback image
    function showFeedback() {
        feedbackImage.classList.remove('hidden');
    }

    // Add event listeners for mouseenter and mouseleave
    contactWidget.addEventListener('mouseenter', hideFeedback);
    contactWidget.addEventListener('mouseleave', showFeedback);

    // Function to animate click image and button
    function animateElements() {
        // Animate feedback image shake
        feedbackImage.classList.add('feedbackImage'); // Trigger shaking
        setTimeout(() => {
            feedbackImage.classList.remove('feedbackImage'); // Reset shaking
        }, 2000); // Match duration with CSS animation

        // Animate click image
        clickImage.classList.add('scale-animation'); // Trigger scaling
        setTimeout(() => {
            clickImage.classList.remove('scale-animation'); // Reset scaling
        }, 1000); // Match this duration with the CSS animation duration

        // Animate button shake
        clickMeButton.classList.add('shakebtn'); // Add shake class
        setTimeout(() => {
            clickMeButton.classList.remove('shakebtn'); // Remove shake class
        }, 500); // Match this duration with the CSS animation duration
    }

    // Call the animation function every 10 seconds
    setInterval(animateElements, 10000); // Repeat every 10 seconds
    animateElements(); // Initial call

    // Video handling (if needed, but not part of the widget)
    const video = document.getElementById('myVideo');
    const muteButton = document.getElementById('muteButton');
    const icon = muteButton.querySelector('.icon i');

    video.muted = true; // Ensure video starts muted
    icon.classList.add('bx-volume-mute');
    icon.classList.remove('bx-volume-low');

    muteButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        video.muted = !video.muted; // Toggle mute state
        icon.classList.toggle('bx-volume-low', !video.muted);
        icon.classList.toggle('bx-volume-mute', video.muted);
    });

    window.addEventListener('load', () => {
        video.play().catch(error => {
            console.error("Error trying to play the video:", error);
        });
    });

    // Scroll animation for transitioning between sections
    const sections = document.querySelectorAll('.home-page, .animated-section');
    const options = { root: null, threshold: 0.1 };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 200);
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll handling for smooth transitions
    document.addEventListener('wheel', (event) => {
        const currentSection = document.querySelector('.home-page.visible');
        if (event.deltaY > 0) {
            if (currentSection) {
                const nextSection = currentSection.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            const currentSection = document.querySelector('.animated-section.visible');
            if (currentSection) {
                const prevSection = currentSection.previousElementSibling;
                if (prevSection) {
                    prevSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
});