function moveNoButton() {
    let noButton = document.querySelector('.no');
    let x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    let y = Math.random() * (window.innerHeight - noButton.offsetHeight);
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
    const present = document.querySelector('.present');
    present.style.display = 'none';
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${50 + Math.random() * 20 - 10}%`;
        heart.style.top = `${50 + Math.random() * 20 - 10}%`;
        heart.style.transform = `scale(${Math.random() * 2})`;
        heart.style.animation = 'explode 1.5s ease-out forwards';
        heartsContainer.appendChild(heart);
    }
    setTimeout(() => {
        alert('Yay! I love you! 💙');
    }, 1500);
}
createHearts();