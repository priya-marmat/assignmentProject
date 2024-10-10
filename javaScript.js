let slider = document.getElementById('sliderImg');
let sliderItems = slider.children;
let totalCards = sliderItems.length;
let cardWidth = sliderItems[0].offsetWidth + 20; // Adjust for margin
let currentIndex = 0;

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
}

function nextSlide() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateSliderPosition();
    }
}

window.addEventListener('resize', () => {
    cardWidth = sliderItems[0].offsetWidth + 20; // Adjust for margin
    updateSliderPosition();
});
