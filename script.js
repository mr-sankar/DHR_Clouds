// --------------------------------------- NAVBAR --------------------------------------------

        // Select all falling-letter elements
        const fallingLetters = document.querySelectorAll('.falling-letter');

        // Function to reset and replay the animation
        function replayAnimation() {
            fallingLetters.forEach(letter => {
                // Remove the animation to reset it
                letter.style.animation = 'none';
                // Trigger reflow to restart the animation
                void letter.offsetWidth;
                // Reapply the animation with the original settings
                letter.style.animation = 'fallFromTop 0.5s ease-out forwards';
                letter.style.animationDelay = letter.dataset.delay;
            });
        }

        // Run the animation initially and then every 4 seconds
        replayAnimation(); // Initial run
        setInterval(replayAnimation, 4000); // Repeat every 4 seconds




// Add active class to clicked nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default only if you want to handle navigation manually
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Navigation is handled by href, so no need to prevent default
    });
});

// Set active link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});



// indexe.js
// ------------------------------------------image rotation

        // Carousel initialization
        const carousel = new bootstrap.Carousel(document.querySelector('#mainCarousel'), {
            interval: 5000, // Slide changes every 5 seconds
            wrap: true
        });

const images = [
    { src: 'assets/AboutUs-rotation-cloud.jpg', caption: 'Scalable cloud solutions for your business growth.' },
    { src: 'assets/AboutUs-rotation-cybersecurity.jpg', caption: 'Advanced cybersecurity for robust digital protection.' },
    { src: 'assets/AboutUs-rotation-ai.jpg', caption: 'AI-driven innovation for transformative business solutions.' },
    { src: 'assets/AboutUS-rotation-ai-deciation-making.png', caption: 'AI-powered analytics for intelligent decision-making.' }
];

        const container = document.getElementById('rotatingContainer');
        let currentState = [
            { src: images[0].src, caption: images[0].caption, position: 'image-large' },
            { src: images[1].src, caption: images[1].caption, position: 'image-small-1' },
            { src: images[2].src, caption: images[2].caption, position: 'image-small-2' },
            { src: images[3].src, caption: images[3].caption, position: 'image-small-3' }
        ];

        function renderImages() {
            container.innerHTML = '';
            currentState.forEach((item, index) => {
                if (item.position === 'image-large') {
                    // Create container for large image with caption
                    const largeContainer = document.createElement('div');
                    largeContainer.className = 'image-large-container zoom';
                    const img = document.createElement('img');
                    img.src = item.src;
                    img.alt = item.caption;
                    img.className = `rotating-image image-large img-fluid big-img`;
                    largeContainer.appendChild(img);
                    const caption = document.createElement('div');
                    caption.className = 'image-large-caption';
                    caption.textContent = item.caption;
                    largeContainer.appendChild(caption);
                    container.appendChild(largeContainer);
                    // Trigger zoom-in
                    setTimeout(() => largeContainer.classList.add('zoom-in'), 50);
                } else {
                    // Create small images
                    const img = document.createElement('img');
                    img.src = item.src;
                    img.alt = item.caption;
                    img.className = `rotating-image ${item.position} img-fluid small-img`;
                    img.style.borderRadius = `10%`,
                    container.appendChild(img);
                }
            });
        }

        function rotateImages() {
            // Apply zoom-out to large image container
            const largeContainer = container.querySelector('.image-large-container');
            if (largeContainer) {
                largeContainer.classList.remove('zoom-in');
                largeContainer.classList.add('zoom');
            }

            // Apply slide transitions to small images
            const small1 = container.querySelector('.image-small-1');
            const small2 = container.querySelector('.image-small-2');
            const small3 = container.querySelector('.image-small-3');
            if (small1 && small2 && small3) {
                small1.classList.add('slide-to-2'); // small-1 moves to small-2
                small2.classList.add('slide-to-1'); // small-2 moves to small-1
                small3.classList.add('slide-to-2'); // small-3 moves to small-2
            }

            // Update positions after transition
            setTimeout(() => {
                // Rotate positions: large → small-3, small-1 → large, small-2 → small-1, small-3 → small-2
                currentState = [
                    { src: currentState[1].src, caption: currentState[1].caption, position: 'image-large' },
                    { src: currentState[2].src, caption: currentState[2].caption, position: 'image-small-1' },
                    { src: currentState[3].src, caption: currentState[3].caption, position: 'image-small-2' },
                    { src: currentState[0].src, caption: currentState[0].caption, position: 'image-small-3' }
                ];

                // Render new positions and reset transitions
                renderImages();
                const newSmall1 = container.querySelector('.image-small-1');
                const newSmall2 = container.querySelector('.image-small-2');
                const newSmall3 = container.querySelector('.image-small-3');
                if (newSmall1 && newSmall2 && newSmall3) {
                    newSmall1.classList.remove('slide-to-2');
                    newSmall2.classList.remove('slide-to-1');
                    newSmall3.classList.remove('slide-to-2');
                }

                // Schedule next rotation after 3-second pause (1s transition + 3s pause)
                setTimeout(rotateImages, 3000);
            }, 1000); // Wait for 1-second transition
        }

        // Initial render
        renderImages();

        // Start rotation after initial 3-second pause
        setTimeout(rotateImages, 3000);
    



// -------------------------------------------- OUR SERVICESS--------------------------------------------

        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const cardBody = button.closest('.card-body');
                const hiddenContent = cardBody.querySelector('.hidden-content');
                const showLessBtn = cardBody.querySelector('.show-less-btn');

                hiddenContent.classList.add('show');
                button.style.display = 'none';
                showLessBtn.style.display = 'inline-block';
            });
        });

        document.querySelectorAll('.show-less-btn').forEach(button => {
            button.addEventListener('click', () => {
                const cardBody = button.closest('.card-body');
                const hiddenContent = cardBody.querySelector('.hidden-content');
                const readMoreBtn = cardBody.querySelector('.read-more-btn');

                hiddenContent.classList.remove('show');
                button.style.display = 'none';
                readMoreBtn.style.display = 'inline-block';
            });
        });
    


/* -------------------- Featured Content ----------------------------------------------- */


        // Smoke Particle Animation
        const smokeContainer = document.querySelector('.smoke-background');
        function createSmokeParticle() {
            const particle = document.createElement('div');
            particle.classList.add('smoke-particle');
            particle.style.width = `${Math.random() * 50 + 20}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            smokeContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 10000);
        }
        setInterval(createSmokeParticle, 500);