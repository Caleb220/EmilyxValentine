function moveNoButton() {
    let noButton = document.querySelector('.no');
    let maxX = window.innerWidth - noButton.offsetWidth - 20; // 20px margin
    let maxY = window.innerHeight - noButton.offsetHeight - 20; // 20px margin

    let x = Math.max(30, Math.random() * maxX);
    let y = Math.max(30, Math.random() * maxY);

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
