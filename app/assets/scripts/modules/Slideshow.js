class Slideshow {
  constructor() {
    this.banner = document.getElementsByClassName('banner_img')[0];
    this.pagination = document.getElementsByClassName('pagination');
    this.clickEvent();
    this.slideChange();
  }

  clickEvent() {
    let paginationAray = Array.from(this.pagination);
    paginationAray.map((paginationElement) => paginationElement.addEventListener('click', this.changePaginationColor.bind(this)))
  }

  changePaginationColor(clickedPaginationElement) {
    let paginationAray = Array.from(this.pagination);
    paginationAray.map((paginationElement) => paginationElement.classList.remove('pagination--red'));
    clickedPaginationElement.target.classList.add('pagination--red');
    this.slideChange();
  }

  slideChange(clickedSlide=1) {
    
    let slides = document.getElementsByClassName('banner__img')[0];
    let currentSlide = clickedSlide;
    let nextSlide = () => {
      if (currentSlide === 6) currentSlide = 1;
      slides.src = `assets/images/slide${currentSlide}.jpg`;
      currentSlide++;
    }
    let paginationAray = Array.from(this.pagination);
    paginationAray.map((paginationElement) => paginationElement.addEventListener('click', stop.bind(this) ));
    function stop() {
      clearInterval(slideInterval);
      slides.src = `assets/images/slide${3}.jpg`; 
      this.slideChange(4);
      
    }
    let slideInterval = setInterval(nextSlide, 4000);

  }
} 
export default Slideshow;