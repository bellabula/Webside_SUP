if (window.innerWidth < 768) {
    document.querySelector("#mainContent iframe").classList.remove("set-middle")
    document.querySelector("#mainContent iframe").width = "100%"
} else {
    document.querySelector("#mainContent iframe").classList.add("set-middle")
    document.querySelector("#mainContent iframe").width = "80%"
}

window.onresize = () => {
    if (window.innerWidth < 768) {
        document.querySelector("#mainContent iframe").classList.remove("set-middle")
        document.querySelector("#mainContent iframe").width = "100%"
    } else {
        document.querySelector("#mainContent iframe").classList.add("set-middle")
        document.querySelector("#mainContent iframe").width = "80%"
    }
}