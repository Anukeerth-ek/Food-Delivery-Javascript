const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

// FOR HEADER IMAGE SLIDER
const imageUlEl = document.getElementById("image-ul");
const leftArrowEl = document.getElementById("left-arrow");
const rightArrowEl = document.getElementById("right-arrow");

function createDomHeaderImgSlider() {
     imageUlEl.addEventListener("wheel", (event) => {
          event.preventDefault();
          imageUlEl.style.scrollBehaviour = "smooth";
          imageUlEl.scrollLeft += event.deltaY;
     });
}

rightArrowEl.addEventListener("click", () => {
     imageUlEl.style.scrollBehaviour = "smooth";
     imageUlEl.scrollLeft += 1500;
});
setInterval(() => {
     imageUlEl.style.scrollBehaviour = "smooth";
     imageUlEl.scrollLeft += 1500;
}, 4000);

leftArrowEl.addEventListener("click", () => {
     imageUlEl.style.scrollBehavior = "smooth";
     imageUlEl.scrollLeft -= 1500;
});
setInterval(() => {
     imageUlEl.style.scrollBehavior = "smooth";
     imageUlEl.scrollLeft -= 1500;
}, 8000);

createDomHeaderImgSlider();

function updateDOM(data) {
     const dishImageWrapperEls = document.querySelectorAll(".dish-image-wrapper");
     const dishContainerEls = document.querySelectorAll(".dish-container");

     console.log(dishContainerEls[0].children[1]);

     const dishName = document.querySelectorAll(".dish-name");

     data.categories.forEach((item, index) => {
          const dishImages = document.createElement("img");
          dishImages.classList.add("dish-image");
          dishImages.src = item.strCategoryThumb;

          dishContainerEls[1].children[1].innerText = item.strCategory;
          if (index < dishImageWrapperEls.length) {
               dishImageWrapperEls[index].appendChild(dishImages);
          }
          if (index < dishContainerEls.length) {
               dishContainerEls[index].children[1].innerText = item.strCategory;
          }
     });
}

// LETS GET API
function getApiDetail() {
     fetch(API_URL)
          .then(function (response) {
               console.log(response);
               return response.json();
          })
          .then(function (data) {
               console.log(data);
               updateDOM(data);
          });
}

getApiDetail();

//SCROLL EVENT

let navContainer = document.querySelector(".nav-container");
window.addEventListener("scroll", () => {
     const scrolledLength = window.scrollY;
     const scrollAble = document.documentElement.scrollHeight - window.innerHeight;
     console.log("ll", Math.ceil(scrolledLength));

     if (Math.ceil(scrolledLength) > 70) {
          navContainer.classList.remove("nav-container");
          navContainer.classList.add("hide-text-shadow");
     } else {
          navContainer.classList.remove("hide-text-shadow");
          navContainer.classList.add("nav-container");
     }
});
