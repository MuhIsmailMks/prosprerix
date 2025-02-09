document.addEventListener("DOMContentLoaded", function () {
    const musicButton = document.querySelector(".music");
    const musicIcon = document.querySelector(".rotate-animation");
    const audio = document.getElementById("backgroundMusic");

    musicButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();  
            musicIcon.classList.add('rotate-animation')
        } else {
            audio.pause(); 
            musicIcon.classList.remove('rotate-animation')
        }
    });
});
