// --- SCROLL ANIMATION ---
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

scrollElements.forEach(el => {
    observer.observe(el);
});


// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.custom-cursor');
const links = document.querySelectorAll('a'); // 모든 링크 요소를 선택

// 마우스 움직임 감지
window.addEventListener('mousemove', e => {
    // e.clientX와 e.clientY는 현재 마우스의 좌표
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 링크에 대한 호버 효과
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
});
