document.body.style.backgroundColor = "black";
const eyeIcon = document.getElementById("eye-icon");
eyeIcon.style.color = "white";

function toggleColors() {
  const hasDarkMode = document.body.classList.contains("dark-mode");
  if (hasDarkMode) {
    document.body.style.backgroundColor = "black";
    eyeIcon.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    eyeIcon.style.color = "black";
  }
}

function darkMode() {
  console.log("darkk mode");
  document.body.classList.toggle("dark-mode");
  toggleColors();
}

function wiper() {
  const wiper = document.getElementsByClassName("wiper");
  console.log("wiper", wiper);
  for (eachWiper of wiper) {
    if (!eachWiper.style.animation) {
      eachWiper.style.animation = "wiperRotate";
      eachWiper.style.animationDuration = "1s";
      eachWiper.style.animationIterationCount = "infinite";
    } else {
      eachWiper.style = null;
    }
  }
}

function carLights() {
  const flash = document.getElementsByClassName("flash");

  for (eachFlashLight of flash) {
    if (!eachFlashLight.style.left) {
      eachFlashLight.style.left = "30px";
      eachFlashLight.style.top = "40px";
      eachFlashLight.style.transform = "translateX(-50%) translateY(-50%)";

      eachFlashLight.style.position = "absolute";
      eachFlashLight.style.height = "600px";
      eachFlashLight.style.width = "600px";
      lights = ["#ed6a6a", "#eaea77", "transparent", "#d9ad5d"];
      eachFlashLight.style.backgroundImage =
        "radial-gradient(circle, #ed6a6a, #eaea77, transparent, #d9ad5d, transparent, transparent, transparent)";
    } else {
      eachFlashLight.style = null;
    }
  }
}

function formClouds() {
  const car = document.getElementById("car");
  const getCloud = document.getElementsByClassName("cloud-icon");
  if (getCloud.length === 0) {
    const img = document.createElement("img");
    img.classList.add("cloud-icon");
    img.width = "94";
    img.height = "94";
    img.src = "https://img.icons8.com/3d-fluency/94/cloud.png";
    img.alt = "cloud";
    car.prepend(img);
  } else {
    getCloud[0].remove();
  }
}

function randomNum() {
  const limit = Math.random() * 100;
  if (limit <= 100) return limit;
  return 0;
}

function createRainDrops() {
  const car = document.getElementById("car");
  const getDrops = document.getElementById("drops-1");
  console.log("getDropsgetDrops", getDrops);
  if (!getDrops) {
    for (let i = 0; i < 10; i += 1) {
      const drops = document.createElement("div");
      drops.classList.add("drops");
      drops.setAttribute(
        "style",
        `position:relative ; top:${randomNum()}px ; left :${randomNum() - 50}px`
      );
      drops.setAttribute("id", `drops-${i}`);
      car.prepend(drops);
    }
  } else {
    for (let i = 0; i < 10; i += 1) {
      const getDrops = document.getElementById(`drops-${i}`);

      getDrops.remove();
    }
  }
}

function carWash() {
  formClouds();
  createRainDrops();
  wiper();
}
