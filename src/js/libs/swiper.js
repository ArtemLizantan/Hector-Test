import Swiper from "swiper/bundle";

function swiperHero() {
  const slideSpan = document.querySelectorAll(".pagination__count");

  const swiper = new Swiper(".hero__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    on: {
      slideChange: function () {
        const activeSlide = this.realIndex + 1;
        console.log("Активный слайд:", activeSlide);
        slideSpan.forEach((activeSpan, index) => {
          const numberSpan = +activeSpan.textContent;
          if (activeSlide === numberSpan) {
            activeSpan.classList.add("_active");
          } else {
            activeSpan.classList.remove("_active");
          }
        });
      },
    },
  });
  slideSpan.forEach((activeSpan, index) => {
    activeSpan.addEventListener("click", () => {
      swiper.slideTo(index); // Перелистывание к соответствующему индексу
    });
  });
}

swiperHero();
