document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('detail-content-container');
    if (!detailContainer) return; // 상세 페이지가 아니면 실행 중단

    // 1. URL에서 영화 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('id');

    // 2. ID를 이용해 filmData에서 해당 영화 정보 찾기
    const film = filmData.find(f => f.id === filmId);

    // 3. 영화 정보가 없으면, 홈페이지로 리디렉션
    if (!film) {
        window.location.href = 'index.html';
        return;
    }

    // 4. 페이지 제목을 영화 제목으로 변경
    document.title = `${film.title} - NEON Clone`;

    // 5. 찾은 정보로 HTML 콘텐츠 생성 및 삽입
    detailContainer.innerHTML = `
        <a href="index.html" class="back-link">← Back to Films</a>
        <h1>${film.title}</h1>
        
        <div class="trailer-container">
            <iframe 
                src="https://www.youtube.com/embed/${film.trailerId}" 
                title="YouTube video player for ${film.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>

        <div class="synopsis">
            <h2>SYNOPSIS</h2>
            <p>${film.synopsis}</p>
        </div>
    `;

    // 6. 커스텀 커서 재초기화 (새로 생성된 링크에 적용하기 위해)
    const cursor = document.querySelector('.custom-cursor');
    if(cursor) {
        const links = document.querySelectorAll('a');
        window.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        links.forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });
    }
});
