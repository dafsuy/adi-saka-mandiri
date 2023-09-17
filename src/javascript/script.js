//Navber Fixed

window.onscroll = () => {
  const header = document.getElementById('home');
  const author = document.getElementById('author');
  const navList = document.getElementById('nav-list');
  const fixedNav = header.offsetTop;
  const endHero = document.getElementById('hero').offsetHeight;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    // other header
  } else {
    header.classList.remove('navbar-fixed');
  }

  if (window.scrollY > endHero - 40) {
    header.classList.add('navbar-white');
    navList.classList.add('nav-text-white');
    author.classList.add('author-change');
  } else {
    navList.classList.remove('nav-text-white');
    header.classList.remove('navbar-white');
    author.classList.remove('author-change');
  }
};

// window.onscroll = () => {
//   const otherHeader = document.getElementById('otherHeader');
//   if (window.scrollY > header.offsetTop) {
//     otherHeader.classList.add('navber-fixed');
//   } else {
//     otherHeader.classList.remove('navbar-fidex');
//   }
// };

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
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  centeredSlide: true,
  speed: 700,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

AOS.init({
  once: false
});
