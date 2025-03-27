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