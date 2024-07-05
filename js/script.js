let bars = document.querySelector(".bars i");
let nav = document.querySelector("nav");
bars.onclick = () => {
  bars.classList.toggle("fa-bars");
  bars.classList.toggle("fa-xmark");
  nav.classList.toggle("active");
};
//
let links = document.querySelectorAll("header nav a");
links.forEach((a) => {
  a.onclick = function () {
    links.forEach((li) => {
      li.classList.remove("active");
    });
    a.classList.add("active");
  };
});
//
let next = document.querySelector(".portfolio .next");
let prev = document.querySelector(".portfolio .prev");
//
prev.addEventListener("click", () => {
  let images = document.querySelector(".portfolio .images");
  let cards = document.querySelectorAll(".portfolio .card");
  images.appendChild(cards[0]);
});
next.addEventListener("click", () => {
  let images = document.querySelector(".portfolio .images");
  let cards = document.querySelectorAll(".portfolio .card");
  images.prepend(cards[cards.length - 1]);
});
//
document.querySelectorAll(".portfolio .card").forEach((e) => {
  e.classList.add("reveal-right");
});
let count = 0;
document.querySelectorAll(".skills .skill").forEach((e) => {
  e.classList.add("reveal-right");
  e.style.transitionDelay = `${count}s`;
  count += 0.1;
});
//
let contactInfo = document.querySelectorAll(".contact .info p");
count = 0;
contactInfo.forEach((i) => {
  i.classList.add("reveal-right");
  i.style.transitionDelay = `${count}s`;
  count += 0.1;
});
//
//
//
let revealRight = document.querySelectorAll(".reveal-right");
let revealUp = document.querySelectorAll(".reveal-up");
//
window.onload = function () {
  revealRight.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 100 &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  //
  revealUp.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 30 &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  //
};
//
//
//
//
window.onscroll = function () {
  revealRight.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 100 &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });

  revealUp.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 30 &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  //
};
///
///
let next2 = document.querySelector(".services .next");
let prev2 = document.querySelector(".services .prev");
let deg = 0;
//
next2.addEventListener("click", () => {
  let cards = document.querySelector(".services .cards");
  deg += 1;
  cards.style.transform = ` perspective(4000px) rotateY(calc(${deg} * 45deg))`;
});
prev2.addEventListener("click", () => {
  let cards = document.querySelector(".services .cards");
  deg -= 1;
  cards.style.transform = ` perspective(4000px) rotateY(calc(${deg} * 45deg)`;
});
