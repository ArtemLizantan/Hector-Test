import Swiper from "swiper/bundle";

function swiperHero() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    on: {
      slideChange: function () {
        const activeSlide = this.realIndex + 1;
        console.log("Активный слайд:", activeSlide);
        const slideSpan = document.querySelectorAll(".pagination__count")
        slideSpan.forEach(activeSpan => {
            const numberSpan = +activeSpan.textContent;
            if(activeSlide === numberSpan){
                activeSpan.classList.add("_active")
            }else{
                activeSpan.classList.remove("_active")
            }
        })
      },
    },
  });
}

swiperHero();
