document.addEventListener('DOMContentLoaded', () => {

    const heroMediaContainer = document.querySelector('.media-container');
    const heroContentContainer = document.querySelector('.hero-content');
    const filmGridContainer = document.querySelector('.film-grid');

    if (!heroMediaContainer || !heroContentContainer || !filmGridContainer) {
        console.error('필수 HTML 컨테이너 요소가 페이지에 없습니다. HTML 구조를 확인하세요.');
        return;
    }

    const renderHero = () => {
        if (heroContent.type === 'video') {
            heroMediaContainer.innerHTML = `<video src="${heroContent.src}" autoplay loop muted playsinline class="background-media"></video>`;
        } else if (heroContent.type === 'image') {
            heroMediaContainer.innerHTML = `<img src="${heroContent.src}" class="background-media" alt="">`;
        }
        heroContentContainer.innerHTML = `<h1>${heroContent.title}</h1><p>${heroContent.subtitle}</p>`;
    };

    const renderFilmGrid = () => {
        let gridHTML = '';
        filmData.forEach(film => {
            // 링크에 ?id=영화id 파라미터를 추가
            gridHTML += `
                <a href="film-detail.html?id=${film.id}" class="film-item">
                    <div class="film-image">
                        <img src="${film.poster}" alt="${film.title}">
                    </div>
                    <span class="title">${film.title}</span>
                </a>
            `;
        });
        filmGridContainer.innerHTML = gridHTML;
    };
    
    const initializeInteractions = () => {
        const scrollElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
