if (window.innerWidth < 768) {
    document.querySelector("#pagehead h3").style.fontSize = "40px"
    document.querySelector("#mainContent h1").style.fontSize = "40px"
} else if (window.innerWidth < 1200) {
    document.querySelector("#pagehead h3").style.fontSize = "53px"
    document.querySelector("#mainContent h1").style.fontSize = "53px"
} else {
    document.querySelector("#pagehead h3").style.fontSize = `${window.innerWidth*0.044}px`
    document.querySelector("#mainContent h1").style.fontSize = `${window.innerWidth*0.044}px`
}

document.querySelectorAll('figure').forEach(ele => {
    ele.firstElementChild.style.height = `${ele.firstElementChild.offsetWidth}px`
})

window.onresize = () => {
    document.querySelectorAll('figure').forEach(ele => {
        ele.firstElementChild.style.height = `${ele.firstElementChild.offsetWidth}px`
    })
    if (window.innerWidth < 768) {
        document.querySelectorAll("#qalist h5").forEach(ele => {ele.style.fontSize = "12px"})
        document.querySelector("#pagehead h3").style.fontSize = "40px"
        document.querySelector("#mainContent h1").style.fontSize = "40px"
    } else if (window.innerWidth < 1200) {
        document.querySelectorAll("#qalist h5").forEach(ele => {ele.style.fontSize = "20px"})
        document.querySelector("#pagehead h3").style.fontSize = "53px"
        document.querySelector("#mainContent h1").style.fontSize = "53px"
    } else {
        document.querySelectorAll("#qalist h5").forEach(ele => {ele.style.fontSize = "20px"})
        document.querySelector("#pagehead h3").style.fontSize = `${window.innerWidth*0.044}px`
        document.querySelector("#mainContent h1").style.fontSize = `${window.innerWidth*0.044}px`
    }
}