// @ts-nocheck

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
// const skillsContent = document.getElementsByClassName('.skills__content')
// const skillsHeader = document.querySelectorAll('.skills__header')


// function toggleSkills() {
//   let itemClass = this.ParentNode.className

//   for(let i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = 'skills__content skills__close'
//   }

//   if(itemClass === 'skills__content skills__close') {
//     this.parentNode.className = 'skills__content skills__open'
//   }
// }

// skillsHeader.forEach((el) => {
//   el.addEventListener('click', toggleSkills)
// })

// const skillsContent = document.querySelectorAll('.skills__content')

// const toggleClass = () => {
//   skillsContent.classList.add('qualification__open')
// }

// skillsContent.addEventListener('click', toggleClass)




/*==================== QUALIFICATION TABS ====================*/
// const tabs = document.querySelectorAll('[data-target]')
// const tabContents = document.querySelector('[data-content]')

// tabs.forEach((tab) => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove('qualification__active')
//     })

//     target.classList.add('qualification__active')

//     tabs.forEach((tab) =>  {
//       tab.classList.remove('qualification__active')
//     })

//     tab.classList.add('qualification__active')
//   })
// })

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


// const modalShow = () => {
//   modalViews.classList.add('active-modal')
// } 


// let modal = function(modalClick) {
//   modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) => {
//   modalBtn.addEventListener('click', () => {
//     modal(i)
//   })
// })

// modalCloses.forEach((modalClose) => {
//   modalClose.addEventListener('click', () => {
//     modalViews.forEach((modalView) => {
//       modalView.classList.remove('active-modal')
//     })
//   })
// })





// let modalShow = () => {
//   modalViews.classList.add('active-modal')
// }

// modalBtns.forEach(btn => btn.addEventListener('click', modalShow))


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
    }
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

