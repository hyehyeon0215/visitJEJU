const header_gnb = document.querySelectorAll('.header-gnb > li');
const languageIcon = document.querySelector('.languageIcon');
const languageList = document.querySelector(".language");

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