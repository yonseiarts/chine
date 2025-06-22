document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 히어로 섹션 렌더링 ---
    const renderHero = () => {
        const mediaContainer = document.querySelector('.media-container');
        const heroContentContainer = document.querySelector('.hero-content');
        
        // 미디어(비디오 또는 이미지) 렌더링
        if (heroContent.type === 'video') {
            const videoEl = document.createElement('video');
            videoEl.src = heroContent.src;
            videoEl.autoplay = true;
            videoEl.loop = true;
            videoEl.muted = true;
            videoEl.playsinline = true;
            videoEl.className = 'background-media';
            mediaContainer.appendChild(videoEl);
        } else if (heroContent.type === 'image') {
            const imageEl = document.createElement('img');
            imageEl.src = heroContent.src;
            imageEl.className = 'background-media';
            mediaContainer.appendChild(imageEl);
        }

        // 텍스트 콘텐츠 렌더링
        const titleEl = document.createElement('h1');
        titleEl.textContent = heroContent.title;
        const subtitleEl = document.createElement('p');
        subtitleEl.textContent = heroContent.subtitle;

        heroContentContainer.appendChild(titleEl);
        heroContentContainer.appendChild(subtitleEl);
    };

    // --- 2. 영화 그리드 렌더링 ---
    const renderFilmGrid = () => {
        const filmGridContainer = document.querySelector('.film-grid');
        filmData.forEach(film => {
            const filmItemHTML = `
                <a href="#" class="film-item" data-id="${film.id}">
                    <div class="film-image">
                        <img src="${film.poster}" alt="${film.title}">
                    </div>
                    <span class="title">${film.title}</span>
                </a>
            `;
            filmGridContainer.innerHTML += filmItemHTML;
        });
    };

    // --- 3. 인터랙션 및 애니메이션 초기화 ---
    const initializeInteractions = () => {
        // 커스텀 커서
        const cursor = document.querySelector('.custom-cursor');
        const links = document.querySelectorAll('a');
        window.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        links.forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });

        // 스크롤 애니메이션
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
    };

    // --- 실행 ---
    renderHero();
    renderFilmGrid();
    initializeInteractions();
});
