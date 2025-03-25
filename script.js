import 'bootstrap/dist/css/bootstrap'
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.itens-galeria img');
    let current = 0;

    function showNextImage() {
       
        current = (current + 1) % galleryItems.length;
        galleryItems[current].classList.remove('hidden');
        galleryItems[current].classList.add('visible');
    }

    galleryItems.forEach((img, index) => {
        if (index !== 0) {
            img.classList.add('hidden');
        } else {
            img.classList.add('visible');
        }
    });

    setInterval(showNextImage,3000); // Muda a imagem a cada 3 segundos
});
// Adicionando efeito ao passar o mouse no número do WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    const whatsappSection = document.querySelector("a[href*='wa.me']");
    
    if (whatsappSection) {
        whatsappSection.addEventListener("mouseover", function () {
            whatsappSection.style.color = "#25D366"; // Cor verde típica do WhatsApp
            whatsappSection.style.textDecoration = "underline";
        });

        whatsappSection.addEventListener("mouseout", function () {
            whatsappSection.style.color = ""; // Restaura a cor original
            whatsappSection.style.textDecoration = "none";
        });
    }
});