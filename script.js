function moveNoButton() {
    let noButton = document.querySelector('.no');

    // Ensure the button is positioned absolutely
    noButton.style.position = "absolute";

    // Calculate the max possible X and Y positions
    let maxX = document.documentElement.clientWidth - noButton.offsetWidth;
    let maxY = document.documentElement.clientHeight - noButton.offsetHeight;

    // Generate a random position within bounds
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);

    // Apply new position
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
