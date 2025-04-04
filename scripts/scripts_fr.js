let currentIndex = 0;
const images = [
    'static/image/5408955515230352433.jpg',
    'static/image/5408955515230352439.jpg',
    'static/image/5408955515230352440.jpg',
    'static/image/5408955515230352441.jpg'
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('sliderImage_fr').src = images[currentIndex];
}