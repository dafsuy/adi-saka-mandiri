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

// animate show
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.animate-up');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
// Swiper

let windowWidth = window.innerWidth;
let page = 1;
if (windowWidth > 640) {
  page = 2;
} else {
  page = 1;
}
let swiper = new Swiper('.mySwiper', {
  slidesPerView: page,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

AOS
AOS.init({
  once: false,
});
