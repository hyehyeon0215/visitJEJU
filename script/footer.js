const sitemap = document.querySelector('.sitemap');
const sitemap_btn = document.querySelector('.sitemap-btn');
const sitemap_gnb = document.querySelector('.sitemap-gnb');

sitemap_btn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(sitemap.classList.contains('active')) {
        sitemap.classList.remove('active');
    } else {
        sitemap.classList.add('active');
    }
})