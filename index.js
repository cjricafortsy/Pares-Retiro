const video = document.getElementById('myVideo');
const muteButton = document.getElementById('muteButton');
const icon = muteButton.querySelector('.icon i');

// Ensure video starts playing automatically (muted) when the page loads
video.muted = true;

// Set the initial icon state to indicate that the video is muted
icon.classList.add('bx-volume-mute');
icon.classList.remove('bx-volume-low');

// Add an event listener for the mute button
muteButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior

    // Toggle mute state
    video.muted = !video.muted;

    // Update icon based on mute state
    icon.classList.toggle('bx-volume-low', !video.muted);
    icon.classList.toggle('bx-volume-mute', video.muted);
});

// Play the video when the page loads
window.addEventListener('load', () => {
    video.play().catch(error => {
        console.error("Error trying to play the video:", error);
    });
});


// Scroll animation for transitioning between sections
const sections = document.querySelectorAll('.home-page, .animated-section');

const options = {
    root: null,
    threshold: 0.1,
};

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 200); // Adjust delay as needed
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
            const nextSection = currentSection.nextElementSibling; // Get the next section
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } else {
        const currentSection = document.querySelector('.animated-section.visible');
        if (currentSection) {
            const prevSection = currentSection.previousElementSibling; // Get the previous section
            if (prevSection) {
                prevSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// Play the video when the page loads
window.addEventListener('load', () => {
    video.play().catch(error => {
        console.error("Error trying to play the video:", error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const feedbackImage = document.getElementById('feedbackImage');
    const contactWidget = document.getElementById('contact-widget');

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
});

const feedbackImage = document.getElementById('feedbackImage');

setInterval(() => {
    feedbackImage.classList.add('shake-animation');
    setTimeout(() => {
        feedbackImage.classList.remove('shake-animation');
    }, 2000); // Duration of the animation
}, 10000); // 10 seconds interval
