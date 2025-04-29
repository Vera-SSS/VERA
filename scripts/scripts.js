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

    // Инициализация Swiper после загрузки страницы
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

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
