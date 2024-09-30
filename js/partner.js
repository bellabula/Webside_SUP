document.querySelectorAll('figure').forEach(ele => {
    ele.firstElementChild.style.height = `${ele.firstElementChild.offsetWidth}px`
})

window.onresize = () => {
    document.querySelectorAll('figure').forEach(ele => {
        ele.firstElementChild.style.height = `${ele.firstElementChild.offsetWidth}px`
    })
}