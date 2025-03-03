document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: true
      });


    const musicButton = document.querySelector(".music");
    const musicIcon = document.querySelector(".music .rotate-animation");
    const audio = document.getElementById("backgroundMusic");

    musicButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();  
            musicIcon.classList.add('rotate-animation')
            musicButton.classList.remove('active')
        } else {
            audio.pause(); 
            musicIcon.classList.remove('rotate-animation')
            musicButton.classList.add('active')
        }
    });



    document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.querySelector(".image-right");
        const footer = document.querySelector("footer"); // Gantilah dengan elemen footer atau batas bawah
      
        function checkPosition() {
          let sidebarRect = sidebar.getBoundingClientRect();
          let footerRect = footer.getBoundingClientRect();
      
          if (footerRect.top <= window.innerHeight) {
            sidebar.style.position = "absolute";
            sidebar.style.bottom = "0";
            sidebar.style.top = "auto";
          } else {
            sidebar.style.position = "fixed";
            sidebar.style.top = "20px";
          }
        }
      
        window.addEventListener("scroll", checkPosition);
        checkPosition();
      });
      
});
