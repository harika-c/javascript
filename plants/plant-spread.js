const heartCode = `&#x2665;`;
const heartEle = `<div style='filter: blur(1px);cursor:pointer'>${heartCode} </div>`;

console.log(`i love js heartSymbol`);

function createSinglePlant() {
  function createClass(element, className) {
    const eleClass = element.classList;
    eleClass.add(className);
  }

  function createVein() {
    for (let i = 0; i < 2; i++) {
      const leftSideVein = document.createElement("div");
      const rightSideVein = document.createElement("div");

      createClass(leftSideVein, "left-side-vein");
      createClass(rightSideVein, "right-side-vein");

      leftSideVeins.appendChild(leftSideVein);
      rightSideVeins.appendChild(rightSideVein);
    }
  }

  const heartIcon = document.getElementsByClassName("heart-icon");
  const plants = document.getElementById("plants");
  const eachPlant = document.createElement("div");
  const leftLeaf = document.createElement("div");
  const leftMainVein = document.createElement("div");
  // const leftPontedTip = document.createElement("div");
  const middleStem = document.createElement("div");
  const rightLeaf = document.createElement("div");
  const rightMainVein = document.createElement("div");
  // const rightPointedTip = document.createElement("div");

  const leftSideVeins = document.createElement("div");
  const rightSideVeins = document.createElement("div");

  createClass(plants, "plants");
  createClass(eachPlant, "each-plant");
  // createClass(leftPontedTip, "left-pointed-tip");
  createClass(leftLeaf, "left-leaf");
  createClass(leftMainVein, "left-main-vein");
  createClass(middleStem, "middle-stem");
  createClass(rightLeaf, "right-leaf");
  createClass(rightMainVein, "right-main-vein");
  // createClass(rightPointedTip, "right-pointed-tip");
  createClass(leftSideVeins, "left-side-veins");
  createClass(rightSideVeins, "right-side-veins");

  heartIcon[0].innerHTML = heartEle;

  plants.appendChild(eachPlant);
  // eachPlant.appendChild(leftPontedTip);
  eachPlant.appendChild(leftLeaf);
  eachPlant.appendChild(middleStem);
  eachPlant.appendChild(rightLeaf);
  // eachPlant.appendChild(rightPointedTip);
  leftLeaf.appendChild(leftSideVeins);
  leftLeaf.appendChild(leftMainVein);
  rightLeaf.appendChild(rightSideVeins);
  rightLeaf.appendChild(rightMainVein);

  createVein();
}

function generatePlant() {
  createSinglePlant();
}

createSinglePlant();
