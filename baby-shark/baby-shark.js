function createEle(parent, attribute, index) {
  const parentEle = document.querySelector(parent);
  const childEle = document.createElement("div");
  childEle.setAttribute("class", attribute);
  childEle.setAttribute(
    "style",
    `animation: moveBottomToTop ${index}s infinite;`
  );
  parentEle.appendChild(childEle);
}

for (let i = 0; i < 10; i++) {
  createEle(".bubbles", "bubble bubble-" + i, i);
}
