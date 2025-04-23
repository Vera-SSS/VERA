document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    const percents = document.querySelector('.preloader__percents');
    const catalog = document.getElementById('catalog');

    if (!preloader || !content || !percents || !catalog) {
        console.error('Не найдены необходимые элементы на странице!');
        return;
    }

    let percent = 0;
    const interval = setInterval(function() {
        percent += 5;
        percents.textContent = percent + '%';
        
        if (percent >= 100) {
            clearInterval(interval);
            loadCourses();
        }
    }, 50); 

    function loadCourses() {
        fetch('data.json')
            .then(response => {
                if (!response.ok) throw new Error('Ошибка сети: ' + response.status);
                return response.json();
            })
            .then(data => {
                displayCourses(data.courses);
                preloader.classList.add('hide');
                content.classList.add('active');
            })
            .catch(error => {
                console.error('Ошибка загрузки данных:', error);
                displayStaticCourses();
                preloader.classList.add('hide');
                content.classList.add('active');
            });
    }

    function displayCourses(courses) {
        catalog.innerHTML = ''; 
        
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            courseElement.innerHTML = `
                <h3>${course.title}</h3>
                <p>Длительность: ${course.duration}</p>
                <p>Уровень: ${course.level}</p>
                <p>Цена: ${course.price} руб.</p>
                <a class="enroll-btn" href="${course.link}">Перейти на страницу курса</a>
            `;
            catalog.appendChild(courseElement);
        });
    }

    function displayStaticCourses() {
        const staticCourses = [
            {
                "id": 1,
                "title": "Английский язык",
                "duration": "3 месяца",
                "level": "Начальный",
                "price": 12000,
                "link": "english.html"
              },
              {
                "id": 2,
                "title": "Французский язык",
                "duration": "4 месяца",
                "level": "Начальный",
                "price": 15000,
                "link": "french.html"
              },
              {
                "id": 3,
                "title": "Японский язык",
                "duration": "6 месяцев",
                "level": "Начальный",
                "price": 18000,
                "link": "japanese.html"
              },
              {
                "id": 4,
                "title": "Итальянский язык",
                "duration": "3 месяца",
                "level": "Начальный",
                "price": 14000,
                "link": "italian.html"
              }
        ]; 
        
        catalog.innerHTML = '<h2>Каталог курсов</h2>'; 
        displayCourses(staticCourses); 
    }
});