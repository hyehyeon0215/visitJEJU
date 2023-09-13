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

languageIcon.addEventListener(("mouseover"), (e) => {
    e.preventDefault();
    languageList.style.visibility = "visible";
    languageList.style.opacity = 1;
})

languageIcon.addEventListener(("mouseleave"), (e) => {
    e.preventDefault();
    languageList.style.visibility = "hidden";
    languageList.style.opacity = 0;
})
