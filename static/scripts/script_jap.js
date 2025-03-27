let currentIndex = 0;
const images = [
    'static/image/5408955515230352434.jpg',
    'static/image/5408955515230352442.jpg',
    'static/image/5408955515230352443.jpg',
    'static/image/5408955515230352444.jpg'
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('sliderImage_jap').src = images[currentIndex];
}