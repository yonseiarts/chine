const pageFunctions = {
    // ... initCursor, initScrollAnimation은 동일 ...
    initCursor() { /* ... */ },
    initScrollAnimation() { /* ... */ },

    renderHomePage() {
        const heroWrapper = document.querySelector('.hero-swiper .swiper-wrapper');
        const filmGridContainer = document.querySelector('.film-grid');
        
        // --- 히어로 슬라이더 렌더링 ---
        if (heroWrapper) {
            let heroHTML = '';
            heroSlides.forEach(slide => {
                heroHTML += `
                    <div class="swiper-slide" style="background-image: url('${slide.src}')">
                        <div class="hero-content">
                            <p>${slide.subtitle}</p>
                            <h1>${slide.title}</h1>
                        </div>
                    </div>
                `;
            });
            heroWrapper.innerHTML = heroHTML;

            // Swiper 초기화
            new Swiper('.hero-swiper', {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
        
        // --- 필름 그리드 렌더링 ---
        if (filmGridContainer) {
            let gridHTML = '';
            filmData.forEach(film => { /* ... 이전과 동일 ... */ });
            filmGridContainer.innerHTML = gridHTML;
        }
    },

    // ... renderDetailPage는 동일 ...
    renderDetailPage() { /* ... */ }
};

const mount = () => {
    pageFunctions.initCursor();
    pageFunctions.initScrollAnimation();
    if (document.querySelector('.hero-swiper')) {
        pageFunctions.renderHomePage();
    }
    if (document.querySelector('.detail-section')) {
        pageFunctions.renderDetailPage();
    }
    pageFunctions.initCursor();
};

const swup = new Swup({ /* ... */ });
mount();
swup.hooks.on('page:view', mount);
