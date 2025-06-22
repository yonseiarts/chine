document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('detail-content-container');

    // 상세 페이지가 아닐 경우를 대비한 안전장치
    if (!detailContainer) {
        // detail-content-container가 없는 페이지(예: index.html)에서는
        // 이 스크립트의 어떤 코드도 실행하지 않도록 여기서 중단합니다.
        return; 
    }

    // 1. URL에서 영화 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const filmId = urlParams.get('id');

    // 2. ID를 이용해 filmData에서 해당 영화 정보 찾기
    // filmData는 data.js 파일에 정의되어 있습니다.
    const film = filmData.find(f => f.id === filmId);

    // 3. 영화 정보가 없으면, 홈페이지로 이동
    if (!film) {
        console.error('해당 ID의 영화를 찾을 수 없습니다:', filmId);
        window.location.href = 'index.html';
        return;
    }

    // 4. 웹페이지의 <title>을 영화 제목으로 변경
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

    // 6. 커스텀 커서 재초기화 (상세 페이지에 동적으로 생성된 링크에 적용하기 위해)
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
