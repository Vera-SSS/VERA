let currentIndex = 0;
const images = [
    'static/image/5408955515230352432.jpg',
    'static/image/5408955515230352436.jpg',
    'static/image/5408955515230352437.jpg',
    'static/image/5408955515230352438.jpg'
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('sliderImage_en').src = images[currentIndex];
}
