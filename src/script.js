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

let windowWidth = window.innerWidth;
let page = 1;
if (windowWidth > 640) {
  page = 3;
} else {
  page = 1;
}
let swiper = new Swiper('.mySwiper', {
  slidesPerView: page,
  spaceBetween: 30,
  centeredSlide: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

AOS;
AOS.init({
  once: false
});
