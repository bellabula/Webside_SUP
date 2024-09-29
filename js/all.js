document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        contactIcon.style.display = "block"
    } else {
        contactIcon.style.display = "none"
    }
})
const navbarHTML = () => {
    let contentHTML = `
            <div class="container-fluid ms-2 me-2">
                <a id="logo" class="logo-hover" href="main.html"><img src="../img/logo.png"></a>
                <button class="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarToggle"
                        aria-controls="navbarToggle" 
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggle">
                    <ul class="navbar-nav ms-auto">
                        <li><a class="nav-link" href="main.html">首頁</a></li>
                        <li><a class="nav-link" href="about.html">關於耐茁</a></li>
                        <li><a class="nav-link" href="">最新消息</a></li>
                        <li id="cliffDropDown">
                            <a class="nav-link" href="cliff.html">【花蓮】清水斷崖 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="">清水斷崖SUP立槳</a>
                                <a class="d-block" href="">清水斷崖KAYAK獨木舟</a>
                            </div>
                        </li>
                        <li id="liyuDropDown">
                            <a class="nav-link" href="">【花蓮】鯉魚潭 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="">鯉魚潭SUP立槳</a>
                                <a class="d-block" href="">鯉魚潭KAYAK獨木舟</a>
                            </div>
                        </li>
                        <li id="roundDropDown">
                            <a class="nav-link" href="">【環島】SUP 各站 ▾</a>
                            <button>▾</button>
                            <div style="display: none; position:absolute">
                                <a class="d-block" href="">北台灣SUP立槳</a>
                                <a class="d-block" href="">宜蘭SUP立槳</a>
                                <a class="d-block" href="">台東SUP立槳</a>
                                <a class="d-block" href="">南投SUP立槳</a>
                            </div>
                        </li>
                        <li><a class="nav-link" href="">合作夥伴</a></li>
                        <li><a class="nav-link" href="">常見Q&A</a></li>
                        <li><a class="nav-link" href="">聯絡我們</a></li>
                    </ul>
                </div>
            </div>
    `
    navBar.innerHTML = contentHTML

    function widthDropDown(x) {
        if (x.matches) { // If media query matches
            cliffDropDown.lastElementChild.style.width = "100%"
            liyuDropDown.lastElementChild.style.width = "100%"
            roundDropDown.lastElementChild.style.width = "100%"
            cliffDropDown.firstElementChild.innerText = "【花蓮】清水斷崖"
            liyuDropDown.firstElementChild.innerText = "【花蓮】鯉魚潭"
            roundDropDown.firstElementChild.innerText = "【環島】SUP 各站"
            cliffDropDown.querySelector("button").style.display = "inline-block"
            liyuDropDown.querySelector("button").style.display = "inline-block"
            roundDropDown.querySelector("button").style.display = "inline-block"
            cliffDropDown.onmouseover = () => {cliffDropDown.lastElementChild.style.display = "none"}
            liyuDropDown.onmouseover = () => {liyuDropDown.lastElementChild.style.display = "none"}
            roundDropDown.onmouseover = () => {roundDropDown.lastElementChild.style.display = "none"}
            let countCliff = 0            
            cliffDropDown.querySelector("button").onclick = () => {
                
                if (countCliff == 0) {
                    cliffDropDown.lastElementChild.style.display = "block"
                    countCliff += 1
                } else {
                    cliffDropDown.lastElementChild.style.display = "none"
                    countCliff -= 1
                }
            }
            let countLiyu = 0            
            liyuDropDown.querySelector("button").onclick = () => {
                
                if (countLiyu == 0) {
                    liyuDropDown.lastElementChild.style.display = "block"
                    countLiyu += 1
                } else {
                    liyuDropDown.lastElementChild.style.display = "none"
                    countLiyu -= 1
                }
            }
            let countRound = 0            
            roundDropDown.querySelector("button").onclick = () => {
                
                if (countRound == 0) {
                    roundDropDown.lastElementChild.style.display = "block"
                    countRound += 1
                } else {
                    roundDropDown.lastElementChild.style.display = "none"
                    countRound -= 1
                }
            }
        } else {
            cliffDropDown.firstElementChild.innerText = "【花蓮】清水斷崖 ▾"
            liyuDropDown.firstElementChild.innerText = "【花蓮】鯉魚潭 ▾"
            roundDropDown.firstElementChild.innerText = "【環島】SUP 各站 ▾"
            cliffDropDown.querySelector("button").style.display = "none"
            liyuDropDown.querySelector("button").style.display = "none"
            roundDropDown.querySelector("button").style.display = "none"
            cliffDropDown.lastElementChild.style.width = `${cliffDropDown.offsetWidth}px`
            liyuDropDown.lastElementChild.style.width = `${liyuDropDown.offsetWidth}px`
            roundDropDown.lastElementChild.style.width = `${roundDropDown.offsetWidth}px`
            cliffDropDown.onmouseover = () => {cliffDropDown.lastElementChild.style.display = "block"}
            cliffDropDown.onmouseleave = () => {cliffDropDown.lastElementChild.style.display = "none"}
            liyuDropDown.onmouseover = () => {liyuDropDown.lastElementChild.style.display = "block"}
            liyuDropDown.onmouseleave = () => {liyuDropDown.lastElementChild.style.display = "none"}
            roundDropDown.onmouseover = () => {roundDropDown.lastElementChild.style.display = "block"}
            roundDropDown.onmouseleave = () => {roundDropDown.lastElementChild.style.display = "none"}
        }
    }
    
    let x = window.matchMedia("(max-width: 1200px)")
    
    widthDropDown(x)
    
    x.addEventListener("change", function() {
        widthDropDown(x);
    });
}

const foot = () => {
    let contentHTML = `
            <div>
                <div>
                    <a href="" class="logo-hover"><img src="../img/icon/facebook3.svg"></a>
                    <a href="" class="logo-hover"><img src="../img/icon/instagram3.svg"></a>
                    <a href="" class="logo-hover"><img src="../img/icon/phone3.svg"></a>
                    <a href="" class="logo-hover"><img src="../img/icon/email.svg"></a>
                    <a href="" class="logo-hover"><img src="../img/icon/line.svg"></a>
                </div>
                <p class="m-0 mt-3">耐茁戶外休閒事業 © 2018-2024 All Rights Reserved</p>
            </div>
    `
    allfooter.innerHTML = contentHTML
    allfooter.classList.add("p-3")
    allfooter.style.backgroundColor = "lightgray"
}

navbarHTML()
foot()