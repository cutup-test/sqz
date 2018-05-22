class Slideshow {
  constructor() {
    this.banner = document.getElementsByClassName('banner_img')[0];
    this.pagination = document.getElementsByClassName('pagination');
    this.clickEvent();
    this.slideChange();
  }

  paginationArray() {
    let paginationAray = Array.from(this.pagination);
    return paginationAray;
  }

  removeRedFromPagination() {
    this.paginationArray().map((paginationElement) => paginationElement.classList.remove('pagination--red'));
  }

  clickEvent() {
    this.paginationArray().map((paginationElement) => paginationElement.addEventListener('click', this.changePaginationColor.bind(this)))
  }

  changePaginationColor(clickedPaginationElement) {
    this.removeRedFromPagination();
    clickedPaginationElement.target.classList.add('pagination--red');
  }

  slideChange(clickedSlide = 1) {
    this.paginationArray()[clickedSlide - 1].classList.add('pagination--red');
    let that = this;
    let slides = document.getElementsByClassName('banner__img')[0];
    let currentSlide = clickedSlide;
    let nextSlide = () => {
      if (currentSlide === 6) currentSlide = 1;
      slides.src = `assets/images/slide${currentSlide}.jpg`;
      this.removeRedFromPagination();
      this.paginationArray()[currentSlide - 1].classList.add('pagination--red');
      currentSlide++;
    }
    this.paginationArray().map((paginationElement) => paginationElement.addEventListener('click', function () {
      stopInterval(this);

    }));
    function stopInterval(eventElement) {
      let slideNumber = eventElement.getAttribute("data-slide-number");
      clearInterval(slideInterval);
      slides.src = `assets/images/slide${slideNumber}.jpg`;
      that.slideChange(slideNumber);
    }
    let slideInterval = setInterval(nextSlide, 2000);
  }
}
export default Slideshow;