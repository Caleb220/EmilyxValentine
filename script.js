function moveNoButton() {
    let noButton = document.querySelector('.no');
    let container = document.querySelector('.container');

    // Ensure absolute positioning for free movement
    noButton.style.position = "absolute";

    // Get screen size
    let maxX = window.innerWidth - noButton.offsetWidth;
    let maxY = window.innerHeight - noButton.offsetHeight;

    // Get container bounds (to avoid placing the button there)
    let containerRect = container.getBoundingClientRect();

    let x, y;
    do {
        // Generate a random position
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);
    } while (
        // Ensure it does NOT overlap the container
        x + noButton.offsetWidth > containerRect.left &&
        x < containerRect.right &&
        y + noButton.offsetHeight > containerRect.top &&
        y < containerRect.bottom
    );

    // Apply new position
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 70; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
        heartsContainer.appendChild(heart);
    }
}
function explodePresent() {
    alert('Yay! I love you! 💙');
}
createHearts();
