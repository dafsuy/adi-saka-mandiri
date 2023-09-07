//Navber Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const author = document.getElementById('author');
  const navList = document.getElementById('nav-list');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    author.classList.add('color-to-primary')
    author.classList.remove('text-white')
    navList.classList.remove('lg:text-white');
  } else {
    header.classList.remove('navbar-fixed');
    author.classList.add('text-white');
    author.classList.remove('color-to-primary');
    navList.classList.add('lg:text-white');
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

// function handleScroll2() {
//   const elements = document.querySelector('.hero-img');
//   elements.forEach((element) => {
//     if (isElementInViewport(element)) {
//       element.classList.add('animate-float');
//       element.classList.remove('animate-float')
//     }
//   });
// }
// Tambahkan event listener scroll
window.addEventListener('scroll', handleScroll);
// window.addEventListener('scroll', handleScroll2);


