// Menu toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark');
    navlist.classList.toggle('open');
});

class SlideShow {
    constructor(slidesClass, interval) {
        this.slides = document.getElementsByClassName(slidesClass);
        this.slideIndex = 0;
        this.interval = interval;
        this.showSlides();
    }

    showSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
            this.slides[i].style.opacity = "0";
        }
        this.slideIndex++;
        if (this.slideIndex > this.slides.length) {
            this.slideIndex = 1;
        }
        this.slides[this.slideIndex - 1].style.display = "block";
        setTimeout(() => {
            this.slides[this.slideIndex - 1].style.opacity = "1";
        }, 100);
        setTimeout(() => this.showSlides(), this.interval);
    }
}

new SlideShow("myslides", 4000);
new SlideShow("myslides1", 4100);
new SlideShow("myslides2", 4200);
new SlideShow("myslides3", 4300);
new SlideShow("myslides4", 4400);
new SlideShow("myslides5", 4500);


let scrollToTopLinks = document.querySelectorAll("#scrollToTop");
scrollToTopLinks.forEach(link => {
link.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});
