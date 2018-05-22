class Slideshow {
  constructor() {
    this.banner = document.getElementsByClassName('banner_img')[0];
    this.pagination = document.getElementsByClassName('pagination');
    this.pauseButton = document.getElementsByClassName('pagination__pause')[0];
    this.slideChange();
  }

  paginationArray() {
    let paginationArray = Array.from(this.pagination);
    return paginationArray;
  }

  removeRedFromPagination() {
    this.paginationArray().map((paginationElement) => paginationElement.classList.remove('pagination--red'));
  }

  slideChange(clickedSlide = 1) {
    this.paginationArray()[clickedSlide - 1].classList.add('pagination--red');
    let that = this;
    let slideInterval = setInterval(nextSlide, 2000);
    let slides = document.getElementsByClassName('banner__img')[0];
    let currentSlide = clickedSlide;

    this.paginationArray().map((paginationElement) => paginationElement.onclick = function (paginationElement) {
      that.removeRedFromPagination();
      paginationElement.target.classList.add('pagination--red');
      stopInterval(this);
    });
    this.pauseButton.onclick = function () {
      let buttonState = that.pauseButton.getAttribute('data-button-state');
      if (buttonState === 'on') {
        that.pauseButton.classList.toggle('pagination__pause--red');
        clearInterval(slideInterval);
        that.pauseButton.setAttribute('data-button-state', 'off');
        that.slideChange(2);
      }
      that.pauseButton.setAttribute('data-button-state', 'on');
      that.pauseButton.classList.toggle('pagination__pause--red');
      clearInterval(slideInterval);
    };

    function nextSlide() {
      if (currentSlide === 6) currentSlide = 1;
      slides.src = `assets/images/slide${currentSlide}.jpg`;
      that.removeRedFromPagination();
      that.paginationArray()[currentSlide - 1].classList.add('pagination--red');
      currentSlide++;
    }

    function stopInterval(eventElement) {
      let slideNumber = eventElement.getAttribute("data-slide-number");
      clearInterval(slideInterval);
      slides.src = `assets/images/slide${slideNumber}.jpg`;
      that.slideChange(slideNumber);
    }
  }
}

export default Slideshow;