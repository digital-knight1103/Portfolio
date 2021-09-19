// @ts-nocheck
/*==================== MENU SHOW Y HIDDEN ====================*/
console.log('hello');


const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')
const navClose = document.querySelector('.nav__close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    console.log('Test');
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
      modalBtns = document.querySelectoAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})





// let modalShow = () => {
//   modalViews.classList.add('active-modal')
// }

// modalBtns.forEach(btn => btn.addEventListener('click', modalShow))

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 