const parseArray = (pokeResult) =>
  pokeResult.map((data) => ({
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
  }));

function randomBgColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

function createCard(parsedPokeInfo) {
  const pokemonId = document.getElementById("pokemon");

  parsedPokeInfo.forEach((eachPoke) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("div");
    card.classList.add(`poke`);
    card.setAttribute("id", eachPoke.id);
    card.style.backgroundColor = randomBgColor();
    image.src = eachPoke.image;
    title.innerText = eachPoke.name;
    title.classList.add("poke-title");
    card.appendChild(image);
    card.appendChild(title);
    pokemonId.appendChild(card);
  });
}

function removePokemonIfExists() {
  const pokemonClass = document.querySelectorAll(".poke");
  if (pokemonClass.length > 0) {
    for (const eachEle of pokemonClass) {
      eachEle.remove();
    }
  }
}

function removeErrorMessageIfExists() {
  const errorMessage = document.querySelector("#error-text");
  if (errorMessage) {
    errorMessage.remove();
  }
}

function createErrorMessage() {
  const errorText = document.createElement("div");
  errorText.setAttribute("id", "error-text");
  errorText.innerText = "Arceus world has 1010 pokemon only ! ";
  const errorMessage = document.getElementById("error-message");
  errorMessage.appendChild(errorText);
}

const pokeChange = async (val) => {
  removePokemonIfExists();
  removeErrorMessageIfExists();
  if (val > 1010) {
    createErrorMessage();
  } else {
    const promises = [];
    for (let index = 1; index <= val; index++) {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${index}`;
      const arr = fetch(apiUrl)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      promises.push(arr);
    }
    await Promise.all(promises).then((pokeResult) => {
      console.log("results", pokeResult);
      const parsedPokeInfo = parseArray(pokeResult); // parse only required information
      console.log("parsedPokeInfo", parsedPokeInfo);
      createCard(parsedPokeInfo);
    });
  }
};
