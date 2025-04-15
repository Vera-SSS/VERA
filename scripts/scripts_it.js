let currentIndex = 0;
const images = [
    'static/image/5408955515230352435.jpg',
    'static/image/5408955515230352445.jpg',
    'static/image/5408955515230352446.jpg',
    'static/image/5408955515230352447.jpg'
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('sliderImage_it').src = images[currentIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('signupModal');
    const btn = document.getElementById('signupButton');
    const span = document.querySelector('.close-modal');
    
    btn.onclick = function() {
        modal.style.display = 'block';
        
        // Автоматическое закрытие через 3 секунды
        setTimeout(function() {
            modal.style.display = 'none';
        }, 3000);
    }
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});