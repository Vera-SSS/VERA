document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { 
            name: "Английский язык", 
            link: "english.html", 
            color: "#FFA07A",
            icon: "🇬🇧"  // Можно добавить иконки флагов
        },
        { 
            name: "Французский язык", 
            link: "french.html", 
            color: "#FFA07A",
            icon: "🇫🇷" 
        },
        { 
            name: "Японский язык", 
            link: "japanese.html", 
            color: "#FFA07A",
            icon: "🇯🇵" 
        },
        { 
            name: "Итальянский язык", 
            link: "italian.html", 
            color: "#FFA07A",
            icon: "🇮🇹" 
        }
    ];

    const catalog = document.getElementById('catalog');

    courses.forEach(course => {
        const button = document.createElement('a');
        button.className = 'button';
        button.href = course.link;
        button.innerHTML = `${course.icon} ${course.name}`;
        button.style.backgroundColor = course.color;
        
        // Добавляем анимацию при наведении
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });

        catalog.appendChild(button);
    });
});

courses.sort(() => Math.random() - 0.5);

