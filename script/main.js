const slide = document.querySelector(".hotplace-slide");
let slideWidth = slide.clientWidth;

const slideBtns = document.querySelector(".slide-btns");
const prevBtn = document.querySelector(".slide-prev");
const nextBtn = document.querySelector(".slide-next");

let slideItems = document.querySelectorAll(".slide-item");
const maxSlide = slideItems.length;

let currSlide = 1;

const pagination = document.querySelector(".slide-pagination");
const paginationItems = document.querySelectorAll(".slide-pagination > li");


const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("li");
const endElem = document.createElement("li");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".slide-item");

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;

  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: 0s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: 0.5s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: 0s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: 0.5s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextMove();
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    prevMove();
});

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", (e) => {
    e.preventDefault();
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}


let loopInterval = setInterval(() => {
  nextMove();
}, 5000);

slideBtns.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
});
  
slideBtns.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove();
    }, 5000);
});



//youtube api

//list = PLT9LozkkUQQv1GE501OHIWiBoUMpgN67I
//key = AIzaSyCH8aar9g3uEDi6wazPhlWbgIFyBf44UH0

let key = "AIzaSyCH8aar9g3uEDi6wazPhlWbgIFyBf44UH0";
let list = "PLT9LozkkUQQv1GE501OHIWiBoUMpgN67I";

let youtubeList = document.querySelector(".youtube-list");
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${list}`;

fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        let items = json.items;
        let result = "";
        items.map((el) => {
            result += `
              <li>
                <a href= "https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" target="_blank">
                  <img src="${el.snippet.thumbnails.medium.url}">
                </a>
                <p>${el.snippet.title}</p>
              </li>
            `;
        });
      youtubeList.innerHTML = result;
});