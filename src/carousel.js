import _ from "lodash";

import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/core";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1.5,
    },
  },
});
