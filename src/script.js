//Navber Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const author = document.getElementById('author');
  const navList = document.getElementById('nav-list');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
  setTimeout(() => {
    navMenu.classList.toggle('opacity-0');
  }, 100);
});

// Swiper
// Home Product Card
let swiper = new Swiper('.swiperHomeProduct', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3  ,
      spaceBetween: 40
    },
  },
  centeredSlide: true,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

AOS.init({
  once: false
});
