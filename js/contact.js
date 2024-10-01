console.log(mainContent.getBoundingClientRect().y)

document.addEventListener('scroll', () => {
    if (window.scrollY > mainContent.getBoundingClientRect().y-300) {
        mainContent.firstElementChild.classList.add("animate__animated")
        mainContent.firstElementChild.classList.add("animate__slideInUp")
        mainContent.firstElementChild.classList.add("show-visible")
    }
})
