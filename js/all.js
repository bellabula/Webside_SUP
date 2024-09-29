// document.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//         navBar.classList.add('scrolled');
//     } else {
//         navBar.classList.remove('scrolled')
//     }
// })

foot = `
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
allfooter.innerHTML = foot
allfooter.classList.add("p-3")
allfooter.style.backgroundColor = "lightgray"
