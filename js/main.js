document.addEventListener('DOMContentLoaded', () => {

    // --- 안전장치: 필수 컨테이너 요소가 있는지 확인 ---
    const heroMediaContainer = document.querySelector('.media-container');
    const heroContentContainer = document.querySelector('.hero-content');
    const filmGridContainer = document.querySelector('.film-grid');

    if (!heroMediaContainer || !heroContentContainer || !filmGridContainer) {
        console.error('필수 HTML 컨테이너 요소가 페이지에 없습니다. HTML 구조를 확인하세요.');
        return; // 필수 요소가 없으면 스크립트 실행 중단
    }

    // --- 1. 히어로 섹션 렌더링 ---
    const renderHero = () => {
        if (heroContent.type === 'video') {
            heroMediaContainer.innerHTML = `
                <video src="${heroContent.src}" autoplay loop muted playsinline class="background-media"></video>
            `;
        } else if (heroContent.type === 'image') {
            heroMediaContainer.innerHTML = `
                <img src="${heroContent.src}" class="background-media" alt="">
            `;
        }

        heroContentContainer.innerHTML = `
            <h1>${heroContent.title}</h1>
            <p>${heroContent.subtitle}</p>
        `;
    };

    // --- 2. 영화 그리드 렌더링 ---
    const renderFilmGrid = () => {
        let gridHTML = '';
        filmData.forEach(film => {
            gridHTML += `
                <a href="film-detail.html" class="film-item" data-id="${film.id}">
                    <div class="film-image">
                        <img src="${film.poster}" alt="${film.title}">
                    </div>
                    <span class="title">${film.title}</span>
                </a>
            `;
        });
        filmGridContainer.innerHTML = gridHTML;
    };
    
    // --- 3. 인터랙션 초기화 (동적 생성 요소 고려) ---
    const initializeInteractions = () => {
        // 스크롤 애니메이션 (정적 요소에만 적용)
        const scrollElements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        scrollElements.forEach(el => observer.observe(el));

        // 커스텀 커서 (모든 링크에 적용되도록 재선택)
        const cursor = document.querySelector('.custom-cursor');
        if (!cursor) return; // 커서 요소가 없으면 실행 안함

        const links = document.querySelectorAll('a');
        window.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        links.forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });
    };

    // --- 실행 ---
    renderHero();
    renderFilmGrid();
    initializeInteractions();
});
