const video = document.getElementById('myVideo');
const muteButton = document.getElementById('muteButton');
const icon = muteButton.querySelector('.icon i');

// Set the initial state of the video to unmuted
video.muted = false;
icon.classList.add('bx-volume-low');
icon.classList.remove('bx-volume-mute');

muteButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    video.muted = !video.muted; // Toggle mute state
    icon.classList.toggle('bx-volume-low', !video.muted);
    icon.classList.toggle('bx-volume-mute', video.muted);
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
    if (event.deltaY > 0) {
        const currentSection = document.querySelector('.home-page.visible');
        const nextSection = currentSection.nextElementSibling; // Get the next section

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const currentSection = document.querySelector('.animated-section.visible');
        const prevSection = currentSection.previousElementSibling; // Get the previous section

        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
