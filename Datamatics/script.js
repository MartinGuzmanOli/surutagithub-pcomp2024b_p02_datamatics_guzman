window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const videoBackground = document.querySelector('.video-background');
    const opacity = Math.max(0, 1 - scrollY / 600); 
    videoBackground.style.opacity = opacity;


    const head = document.querySelector('head');
    if (scrollY > 100) { 
        head.classList.add('head-visible');
    } else {
        head.classList.remove('head-visible');
    }
});
