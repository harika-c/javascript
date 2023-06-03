let currentDay;

function addElement(color, thing) {
  let element = document.createElement("div");
  element.classList.add(thing);
  element.style.backgroundColor = color;
  element.style.width = "40px";
  element.style.height = "40px";
  element.style.borderRadius = "50%";
  element.style.marginTop = "20px";
  const above6thB = document.getElementsByClassName(" item-6-1")[0];
  console.log("above6thB", above6thB);
  above6thB.appendChild(element);
}

function removeElement(element) {
  element.remove();
}

function changeColor(color, day) {
  const skyEle = document.querySelectorAll(".sky");
  skyEle.forEach((eachSkyEle) => {
    eachSkyEle.style.backgroundColor = color;
  });

  currentDay = day;
}

function changeDay() {
  if (currentDay === "morning") {
    changeColor("black", "night");
  } else {
    changeColor("orange", "morning");
  }

  const getSunEle = document.getElementsByClassName("sun");
  const getMoonEle = document.getElementsByClassName("moon");

  if (getSunEle.length === 0 && currentDay === "morning") {
    addElement("red", "sun");
  } else if (getSunEle.length && currentDay === "night") {
    removeElement(getSunEle[0]);
  }
  if (getMoonEle.length === 0 && currentDay === "night") {
    addElement("white", "moon");
  } else if (getMoonEle.length && currentDay === "morning") {
    removeElement(getMoonEle[0]);
  }
}

changeColor("black", "night");
