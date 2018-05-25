class Slideshow {
  constructor() {
    this.banner = document.getElementsByClassName('banner_img')[0];
    this.pagination = document.getElementsByClassName('pagination');
    this.pauseButton = document.getElementsByClassName('pagination__pause')[0];
    this.arrowButton = document.getElementsByClassName('circle-icon--white-right')[0];
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
    this.removeRedFromPagination();
    if (clickedSlide === 0) clickedSlide++;
    this.paginationArray()[clickedSlide - 1].classList.add('pagination--red');
    let that = this;
    let slideInterval = setInterval(nextSlide, 1500);
    let slides = document.getElementsByClassName('banner__img')[0];
    let currentSlide = clickedSlide;

    this.paginationArray().map((paginationElement) => paginationElement.onclick = function (paginationElement) {
      that.removeRedFromPagination();
      paginationElement.target.classList.add('pagination--red');
      stopInterval(this);
    });

    this.arrowButton.onclick = (event) => {

      let whichArrowClicked = (event.clientX / window.innerWidth) * 100;
      if (whichArrowClicked < 50) leftArrowClicked();
      else rightArrowClicked();

      function rightArrowClicked() {
        let buttonStateArrow = that.pauseButton.getAttribute('data-arrow-button-state');
        let buttonStatePause = that.pauseButton.getAttribute('data-button-state');
        if (buttonStateArrow === 'off' && currentSlide != 1) currentSlide--;
        that.removeRedFromPagination();
        if (currentSlide >= 5 && (buttonStateArrow === 'on' || buttonStatePause === 'on')) that.paginationArray()[0].classList.add('pagination--red');
        else if (buttonStateArrow === 'off' && currentSlide >= 5) {
          that.paginationArray()[0].classList.add('pagination--red');
        } else that.paginationArray()[currentSlide].classList.add('pagination--red');
        that.pauseButton.setAttribute('data-button-state', 'on');
        if (buttonStatePause === 'off') that.pauseButton.classList.add('pagination__pause--red');
        that.pauseButton.setAttribute('data-arrow-button-state', 'on');
        clearInterval(slideInterval);
        if (currentSlide < 1 || currentSlide >= 5) currentSlide = 0;
        currentSlide++;
        slides.src = `assets/images/slide${currentSlide}.jpg`;
      }

      function leftArrowClicked() {
        let buttonStateArrow = that.pauseButton.getAttribute('data-arrow-button-state');
        let buttonStatePause = that.pauseButton.getAttribute('data-button-state');
        if (buttonStateArrow === 'off' && currentSlide != 1) currentSlide--;
        that.removeRedFromPagination();
        if (currentSlide >= 5 && (buttonStateArrow === 'on' || buttonStatePause === 'on')) that.paginationArray()[0].classList.add('pagination--red');
        else if (buttonStateArrow === 'off' && currentSlide >= 5) {
          that.paginationArray()[0].classList.add('pagination--red');
        } else that.paginationArray()[currentSlide].classList.add('pagination--red');
        that.pauseButton.setAttribute('data-button-state', 'on');
        if (buttonStatePause === 'off') that.pauseButton.classList.add('pagination__pause--red');
        that.pauseButton.setAttribute('data-arrow-button-state', 'on');
        clearInterval(slideInterval);
        if (currentSlide < 1 || currentSlide >= 5) currentSlide = 0;
        currentSlide--;
        slides.src = `assets/images/slide${currentSlide}.jpg`;
      }

    }

    this.pauseButton.onclick = function () {
      let buttonStatePause = that.pauseButton.getAttribute('data-button-state');
      let buttonStateArrow = that.pauseButton.getAttribute('data-arrow-button-state');
      if (buttonStatePause == 'on') {
        that.pauseButton.classList.remove('pagination__pause--red');
        clearInterval(slideInterval);
        that.pauseButton.setAttribute('data-button-state', 'off');
        that.pauseButton.setAttribute('data-arrow-button-state', 'off');
        if (buttonStateArrow === 'on') {
          that.slideChange(currentSlide);
        } else {
          that.slideChange(currentSlide - 1);
        }
      } else {
        that.pauseButton.setAttribute('data-button-state', 'on');
        that.pauseButton.classList.add('pagination__pause--red');
        clearInterval(slideInterval);
      }
    };

    function nextSlide() {
      if (currentSlide < 1 || currentSlide >= 6) currentSlide = 1;
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