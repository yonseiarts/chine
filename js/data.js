// === 사용자 설정 영역 ===

// 1. 히어로 섹션 콘텐츠
const heroContent = {
  type: 'video', // 'video' 또는 'image' 중 선택
  src: 'videos/hero-video.mp4', // 동영상 경로 또는 이미지 경로
  title: 'MY OWN FILM',
  subtitle: 'A FILM BY ME'
};


// 2. 영화 그리드 콘텐츠
// 여기에 원하는 만큼 영화 정보를 추가하거나 수정, 삭제할 수 있습니다.
const filmData = [
  {
    id: 'film1',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    title: 'ANORA'
  },
  {
    id: 'film2',
    poster: 'https://image.tmdb.org/t/p/w500/sEaC3U1aMybB0n0fL5eia2Sman2.jpg',
    title: 'PARASITE'
  },
  {
    id: 'film3',
    poster: 'https://image.tmdb.org/t/p/w500/vqzNJd9oGfl9eS2N2K1hTOY_o3z.jpg',
    title: 'PORTRAIT OF A LADY ON FIRE'
  },
  {
    id: 'film4',
    poster: 'https://image.tmdb.org/t/p/w500/b34S25N6yT1pB0nS6wTJwT9MniG.jpg',
    title: 'TRIANGLE OF SADNESS'
  },
  // {
  //   id: 'my-film',
  //   poster: 'images/my-poster.jpg', // 예: images 폴더에 내 포스터 이미지 추가
  //   title: 'MY MOVIE TITLE'
  // },
];
