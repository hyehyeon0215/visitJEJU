const header_gnb = document.querySelectorAll('.header-gnb > li');
const languageIcon = document.querySelector('.languageIcon');
const languageList = document.querySelector('.language');
const menuIcon =document.querySelector('.menuIcon');
const tab_menu = document.querySelector('.tab-menu');
const tab_close = document.querySelector('.tab-close');
const tab_li = document.querySelectorAll('.tab-gnb > li');

header_gnb.forEach((el)=>{
    el.addEventListener(("mouseover"), (e) => {
        e.preventDefault();
        let sub = el.querySelector(".header-sub");
        sub.style.visibility = "visible";
        sub.style.opacity = 1;
    })

    el.addEventListener(("mouseleave"), (e) => {
        e.preventDefault();
        let sub = el.querySelector(".header-sub");
        sub.style.visibility = "hidden";
        sub.style.opacity = 0;
    })
})

languageIcon.addEventListener(("click"), (e) => {
    e.preventDefault();
    if (languageList.classList.contains('on')) {
        languageList.classList.remove('on');
    } else {
        languageList.classList.add('on');
    }
})

menuIcon.addEventListener(("click"), (e)=>{
    e.preventDefault();
    tab_menu.classList.add('active');
})

tab_close.addEventListener(("click"), (e)=>{
    e.preventDefault();
    tab_menu.classList.remove('active');

    tab_li.forEach((el)=>{
        el.classList.remove("gray");
    })
})

tab_li.forEach((el)=>{
    el.addEventListener("mouseover", (e)=> {
        e.preventDefault();
        tab_li.forEach((el)=>{
            el.classList.remove("on");
            el.classList.add("gray");
        })
        el.classList.remove("gray");
        el.classList.add("on");
    })
})