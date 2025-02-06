function moveNoButton() {
    let noButton = document.querySelector('.no');

    // Ensure the button has absolute positioning
    noButton.style.position = "absolute";

    // Get the viewport width and height
    let maxX = window.innerWidth - noButton.offsetWidth;
    let maxY = window.innerHeight - noButton.offsetHeight;

    // Ensure the button never goes outside the screen
    let x = Math.max(0, Math.min(Math.random() * maxX, maxX));
    let y = Math.max(0, Math.min(Math.random() * maxY, maxY));

    // Apply the new position
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}


function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 30; i++) {
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
