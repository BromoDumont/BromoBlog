document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".lightbox-img");
    let currentIndex = 0;

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage();
            document.body.appendChild(lightbox);
        });
    });

    function showImage(){
        lightboxImg.src = images[currentIndex].src;
    }

    lightbox.addEventListener("click", () => {
        lightbox.remove();
    });

    document.addEventListener("keydown", e => {
        if(!lightbox.isConnected) return;

        if(e.key === "Escape") lightbox.remove();

        if(e.key === "ArrowRight"){
            currentIndex = (currentIndex + 1) % images.length;
            showImage();
        }

        if(e.key === "ArrowLeft"){
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage();
        }
    });

});