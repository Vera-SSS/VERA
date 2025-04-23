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

function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const percents = document.querySelector('.preloader__percents');
    const content = document.querySelector('.content');
    
    let percent = 0;
    const interval = setInterval(() => {
        percent += 2;
        percents.textContent = percent + '%';
        
        if (percent >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    content.style.display = 'block';
                    setTimeout(() => {
                        content.style.opacity = '1';
                    }, 50);
                }, 500);
            }, 300);
        }
    }, 30);
}

function initModal() {
    const modal = document.getElementById('signupModal');
    const btn = document.getElementById('signupButton');
    const span = document.querySelector('.close-modal');
    
    if (btn && modal && span) {
        btn.onclick = function() {
            modal.style.display = 'block';
            setTimeout(() => {
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
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'hidden';
    
    initPreloader();
    
    initModal();
    
    if (images.length > 0 && document.getElementById('sliderImage_it')) {
        document.getElementById('sliderImage_it').src = images[0];
    }
    
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 1500);
});

