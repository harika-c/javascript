let card1 = document.getElementById("card-1");
let para1 = document.getElementById("para-1");
let card2 = document.getElementById("card-2");
let para2 = document.getElementById("para-2");
let card3 = document.getElementById("card-3");
let para3 = document.getElementById("para-3");
let card4 = document.getElementById("card-4");
let para4 = document.getElementById("para-4");
let card5 = document.getElementById("card-5");
let para5 = document.getElementById("para-5");
let card6 = document.getElementById("card-6");
let para6 = document.getElementById("para-6");
let card7 = document.getElementById("card-7");
let para7 = document.getElementById("para-7");
let card8 = document.getElementById("card-8");
let para8 = document.getElementById("para-8");
let card9 = document.getElementById("card-9");
let para9 = document.getElementById("para-9");

para1.style.display =
  para2.style.display =
  para3.style.display =
  para4.style.display =
  para5.style.display =
  para6.style.display =
  para7.style.display =
  para8.style.display =
  para9.style.display =
    "none";

card1.addEventListener("mouseover", mouseHover);
card1.addEventListener("mouseout", mouseOut);
card2.addEventListener("mouseover", mouseHover);
card2.addEventListener("mouseout", mouseOut);
card3.addEventListener("mouseover", mouseHover);
card3.addEventListener("mouseout", mouseOut);
card4.addEventListener("mouseover", mouseHover);
card4.addEventListener("mouseout", mouseOut);
card5.addEventListener("mouseover", mouseHover);
card5.addEventListener("mouseout", mouseOut);
card6.addEventListener("mouseover", mouseHover);
card6.addEventListener("mouseout", mouseOut);
card7.addEventListener("mouseover", mouseHover);
card7.addEventListener("mouseout", mouseOut);
card8.addEventListener("mouseover", mouseHover);
card8.addEventListener("mouseout", mouseOut);
card9.addEventListener("mouseover", mouseHover);
card9.addEventListener("mouseout", mouseOut);

function mouseHover(event) {
  console.log("hover", event.type);
  if (event.target.offsetParent?.className === "card card-1") {
    para1.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-2") {
    para2.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-3") {
    para3.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-4") {
    para4.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-5") {
    para5.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-6") {
    para6.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-7") {
    para7.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-8") {
    para8.style.display = "block";
  } else if (event.target.offsetParent?.className === "card card-9") {
    para9.style.display = "block";
  }
}

function mouseOut(event) {
  if (event.target.offsetParent?.className === "card card-1") {
    para1.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-2") {
    para2.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-3") {
    para3.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-4") {
    para4.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-5") {
    para5.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-6") {
    para6.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-7") {
    para7.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-8") {
    para8.style.display = "none";
  } else if (event.target.offsetParent?.className === "card card-9") {
    para9.style.display = "none";
  }
}
