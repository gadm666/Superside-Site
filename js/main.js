// incon

let liIconDown = document.querySelector(
  ".nav__container ul li:nth-child(1) .nav-down"
);
let liIconUpper = document.querySelector(
  ".nav__container ul li:nth-child(1) .nav-upper"
);
let li = document.querySelector(".nav__container ul li:nth-child(1)");

// capabilities-form

let capaLi = document.querySelector(".nav__container ul li:nth-child(1)");
let capaForm = document.querySelector(".capabilities-form");

capaLi.addEventListener("click", () => {
  if (capaForm.style.display === "none") {
    capaForm.style =
      "display:block; animation: cabaAnimation 0.5s linear  forwards;";
    liIconUpper.style.display = "none";
    liIconDown.style.display = "inline-block";
  } else {
    liIconUpper.style.display = "inline-block";
    liIconDown.style.display = "none";
    capaForm.style.display = "none";
  }
});

// when scroll
let Nav = document.querySelector("nav");

let ChangesColor = document.querySelectorAll(".nav__color");

window.addEventListener("scroll", () => {
  let ScrollW = window.scrollY;

  if (ScrollW <= 5) {
    Nav.style.background = "transparent";
    Nav.style.transition = "0.5s";
    for (i = 0; i < ChangesColor.length; i++) {
      ChangesColor[i].style.color = "white";
    }
  } else {
    Nav.style.background = "white";
    Nav.style.transition = "0.5s";
    for (i = 0; i < ChangesColor.length; i++) {
      ChangesColor[i].style.color = "black";
    }
  }
});

// responsive nav

let Navv = document.querySelector("nav");

let NavIcon = document.querySelector(".toggle");

let NavUl = document.querySelector(".nav__container ul");

NavIcon.addEventListener("click", () => {
  if (NavUl.style.display === "none") {
    NavUl.style.display = "block";
  } else {
    NavUl.style.display = "none";
  }
});

// info section

let info__articles = document.querySelectorAll(".info_about .right article");

let upper__icon = document.querySelectorAll(
  ".info_about .right article .upper__arrow"
);
let down__icon = document.querySelectorAll(
  ".info_about .right article .down__arrow"
);

let info__prg = document.querySelectorAll(".info_about .right article p");

for (let i = 0; i < info__articles.length; i++) {
  info__articles[i].addEventListener("click", () => {
    if (info__prg[i].classList.contains("active")) {
      info__prg[i].classList.remove("active");
      upper__icon[i].style.display = "block";
      down__icon[i].style.display = "none";
    } else {
      info__prg[i].classList.add("active");
      upper__icon[i].style.display = "none";
      down__icon[i].style.display = "block";
    }
  });
}

// loader page

let allPage = document.querySelector(".page")

let loader = document.querySelector(".loader")



setTimeout( () =>{
  allPage.style.display = "block"
  loader.style.display = "none"
},2500)


