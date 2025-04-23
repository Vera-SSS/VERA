let currentIndex = 0;
const images = [
    'static/image/5408955515230352428.jpg',
    'static/image/5408955515230352429.jpg',
    'static/image/5408955515230352431.jpg',
    'static/image/5408955515230352430.jpg'
];

document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const percents = document.querySelector('.preloader__percents');
    const content = document.querySelector('.content');

    if (!preloader || !percents) {
        console.error('Не найдены элементы предзагрузчика!');
        return;
    }

    setTimeout(() => {
        content.style.opacity = '1';
    }, 100);

    let percent = 0;
    const interval = setInterval(function() {
        percent += 1;
        percents.textContent = percent + '%';
        
        if (percent >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                document.body.style.overflow = 'auto';
                preloader.classList.add('hidden'); 
            }, 300);
        }
    }, 20);
    
    document.body.style.overflow = 'hidden';

    const sliderImage = document.getElementById('sliderImage');
    if (sliderImage && images.length > 0) {
        sliderImage.src = images[currentIndex];
    }

});

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('sliderImage').src = images[currentIndex];
}

// * начало
// * Пользователь нажимает на кнопки главной страницы "Английский язык" и др
// * Если пользователь не зашел в своей профиль, то ему показывается окно "Для записи на курс нужно сначала войти в свой профиль!"
// * конец

function showPopup() {
    document.getElementById('popup').style.display = 'flex'; 
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; 
}
;