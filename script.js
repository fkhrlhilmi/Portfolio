								function openLeave() {
									window.open("leave.html", "_self");
									window.close();

								}

								document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const nextBtn = container.querySelector('.carousel-btn.next');
    const prevBtn = container.querySelector('.carousel-btn.prev');

    let currentIndex = 0;

    function updateCarousel() {
        const itemOffset = items[currentIndex].offsetLeft;
        track.style.transform = `translateX(-${itemOffset}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});

const char = document.getElementById("floating-character");
const tooltip = document.getElementById("char-tooltip");

const messages = [
    "Keep coding!",
    "Need help? 👀",
    "Sup",
    "Love ya!",
    "hire me pls",
    "(-.-)Zzz...",
    "srsly pls hire me",
    "Hiiiiii!",
    "Whats up?",
    "6 - 7"
];

// Show random message on hover 
char.addEventListener("mouseenter", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    tooltip.textContent = messages[randomIndex];
    tooltip.classList.add("show");
});

char.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
});

// Optional: click to show a random message in alert
char.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
});



