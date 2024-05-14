/**
 * Render unordered list and append it to the main tag in the body.
 * @name render
 * @param {object} integerListGenerator - Model istance.
 * @return {void}
 */
const render = (integerListGenerator): void => {
  const randomListMap = integerListGenerator.getGeneratedMap();

  const app = document.getElementById("app");

  const ul = document.createElement("ul");

  randomListMap.forEach((value) => {
    const li = document.createElement("li");

    li.innerText = value.toString();

    ul.appendChild(li);
  });

  app.appendChild(ul);
};

export default render;
