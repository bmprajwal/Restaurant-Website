function scrollAppear() {
    let text = document.querySelector('.scroll-text')
    let textPosition = text.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 1.6

    if(textPosition < screenPosition){
        text.classList.add('scroll-appear')
    }
}

window.addEventListener('scroll', scrollAppear)


const navSlide = () => {
    let burger = document.querySelector('.burger')
    let nav = document.querySelector('.nav-links')
    let navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5   + 0.2}s`
            }
        })

        burger.classList.toggle('toggle')
    })

}
navSlide()