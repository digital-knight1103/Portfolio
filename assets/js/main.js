/*==================== Preload ====================*/

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload__finish')
})


/*==================== MENU SHOW and HIDDEN ====================*/
console.log('Witaj Kolego');

const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/


const navLink = document.querySelectorAll('.nav__link')

const removeMenuMobile = () => {
  const navMenu = document.querySelector('.nav__menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(el => el.addEventListener('click', removeMenuMobile))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills() {
  let itemClass = this.parentNode.className

  for(let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if(itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active')
    })

    target.classList.add('qualification__active')

    tabs.forEach((tab) =>  {
      tab.classList.remove('qualification__active')
    })

    tab.classList.add('qualification__active')
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
// code from demos https://swiperjs.com/ 

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
var swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sectionsActive = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sectionsActive.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('click' , scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
const scrollHeader = () => {
  const nav = document.querySelector('header')

  if(this.scrollY >= 100) {
    nav.classList.add('scroll-header') 
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


const scrollTop = () => {
  const scrollTop = document.querySelector('.scrollTop')

  if(window.scrollY >= 500) {
    scrollTop.classList.add('show-scroll') 
  } else {
    scrollTop.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by valitading the dark theme class
const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'
}

//We validate if the user previously chose a topic 
if (selectedTheme) {
  // if the validation if fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with button
themeButton.addEventListener('click', () => {
  //add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  //we save the theme and the corrent icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '50px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal('.home__header, .section__title', {delay:300, scale: 0.8})
sr.reveal('.section__subtitle', {delay:600, scale: 0.8})
sr.reveal('.home__data, .about__data', {delay:400})
sr.reveal('.home__img, .project__bg', {delay:200, origin: 'top', })
sr.reveal('.home__social', {delay:800, origin: 'left', scale: 0.6})

sr.reveal('.services__img', {delay:1000, origin: 'right', scale: 0.4})

sr.reveal('.about__img, .products__card, .footer__logo, .footer__content, .footer__copy', {origin: 'top', interval: 300, scale: 0.5})
sr.reveal('.specs__data, .discount__animate', {origin: 'left', interval: 300})
sr.reveal('.specs__img, .discount__img', {origin: 'right'})

sr.reveal('.case__img', {origin: 'top',scale: 0.8})
sr.reveal('.case__data', {origin: 'bottom',scale: 0.9})
