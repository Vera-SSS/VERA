let currentIndex = 0;
const images = [
    'static/image/5408955515230352428.jpg',
    'static/image/5408955515230352429.jpg',
    'static/image/5408955515230352431.jpg',
    'static/image/5408955515230352430.jpg'
];

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

