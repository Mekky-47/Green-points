const section = document.querySelector(".tiles");
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    const sectionTop = 600;
    const sectionHeight = 2500-367;
    const scrollY = window.scrollY;
    
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        let progress = ((scrollY - sectionTop) / (sectionHeight - window.innerHeight)) * 100;
        progressBar.style.height = `${progress}%`;
    } else if (scrollY < sectionTop) {
        progressBar.style.height = "0%";
    } else {
        progressBar.style.height = "100%";
    }
});


tiles = document.querySelectorAll('.tile_content');
tiles.forEach(tile => {
    tile.addEventListener('click', ()=>{
        if (tile.classList.contains('stay-hovered')) {
            tile.classList.remove('stay-hovered')
        } else {
            tile.classList.add('stay-hovered')
        }
    })
});


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        html: true, // Change to 'top', 'bottom', 'left' as needed
        fallbackPlacements: [], // Prevents auto-repositioning
        boundary: "window", // Ensures it stays within the viewport
    });
});