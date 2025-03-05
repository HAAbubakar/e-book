document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".service-box");
    const ebookSlides = document.querySelectorAll(".ebook-slide");
    const dotsContainer = document.querySelector(".dots-container");
    let currentIndex = 0;
    

    // Create dots for the slider (Mobile & Tablet only)
    ebookSlides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.setAttribute("data-index", index);
        dotsContainer.appendChild(dot);
        
    });

    const dots = document.querySelectorAll(".dot");

    function updateService(service) {
        ebookSlides.forEach(slide => {
            slide.classList.remove("active");
            if (slide.dataset.service === service) {
                slide.classList.add("active");
                currentIndex = [...ebookSlides].indexOf(slide);
                updateDots();
            }
        });
    }

    // Desktop Click Event
    serviceBoxes.forEach(box => {
        box.addEventListener("click", function () {
            serviceBoxes.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const serviceName = this.dataset.service;
            updateService(serviceName);
            clearInterval(autoSlideInterval); // Stop auto-slide when user clicks
        });
    });

    // Swipe functionality for Mobile & Tablet
    let autoSlideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    
    const slider = document.querySelector(".ebook-slider");

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextSlide();
        } else if (touchEndX > touchStartX) {
            prevSlide();
        }
        clearInterval(autoSlideInterval); // Stop auto-slide on user swipe
        autoSlideInterval = setInterval(autoSlide, 4000); // Restart auto-slide
    }

    function nextSlide() {
        ebookSlides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % ebookSlides.length;
        ebookSlides[currentIndex].classList.add("active");
        updateDots();
    }

    function prevSlide() {
        ebookSlides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + ebookSlides.length) % ebookSlides.length;
        ebookSlides[currentIndex].classList.add("active");
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            clearInterval(autoSlideInterval);
            currentIndex = parseInt(this.dataset.index);
            updateService(ebookSlides[currentIndex].dataset.service);
            autoSlideInterval = setInterval(autoSlide, 4000); // Restart auto-slide
        });
    });

    // Auto-Slider Function
    function autoSlide() {
        ebookSlides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % ebookSlides.length;
        ebookSlides[currentIndex].classList.add("active");
        updateDots();
    }

    // Start Auto-Sliding only if on Tablet & Mobile
    function checkAutoSlide() {
        if (window.innerWidth <= 768) {
            autoSlideInterval = setInterval(autoSlide, 4000);
        } else {
            clearInterval(autoSlideInterval);
        }
    }

    checkAutoSlide();
    window.addEventListener("resize", checkAutoSlide);

    // Set Default Active Service
    updateService("ebook");
});