document.querySelectorAll('img[data-sound]').forEach(img => {
    let audio;
    img.addEventListener('mouseover', () => {
        const soundSrc = img.getAttribute('data-sound');
        audio = new Audio(soundSrc);
        audio.loop = true;
        audio.play();
    });

    img.addEventListener('mouseout', () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});