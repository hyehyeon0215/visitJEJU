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


// s

// slideBtns.addEventListener("mouseover", () => {
//     clearInterval(loopInterval);
// });
  
// slideBtns.addEventListener("mouseout", () => {
//     loopInterval = setInterval(() => {
//       nextMove();
//     }, 5000);
// });


let startPoint = 0;
let endPoint = 0;


slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});

slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});

let loopInterval = setInterval(() => {
  nextMove();
}, 3000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
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


// 이벤트 영역 슬라이드

const event_ul = document.querySelector(".event-slide");
const event_content = event_ul.children;
const btns = document.querySelector(".event-btns");
const [event_prev, event_next] = btns.children;

event_prev.addEventListener("click", (e) => {
  e.preventDefault();
  event_ul.prepend(event_ul.lastElementChild);
})

event_next.addEventListener("click", (e) => {
  e.preventDefault();
  event_ul.append(event_ul.firstElementChild);
})