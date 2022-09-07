let hamburgerMenu = document.querySelector('#hamburger__menu')
let navBlock = document.querySelector('.nav__block')
let closedd = document.querySelector('.closedd')

hamburgerMenu.addEventListener('click' , ()=> {
    navBlock.style.transform = 'translateX(0%)'
})
closedd.addEventListener('click' , ()=> {
    navBlock.style.transform = 'translateX(130%)'
})

