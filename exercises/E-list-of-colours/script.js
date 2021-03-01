function listOfColours(colours) {
  let content = document.querySelector("#content");
  let selectElement = document.createElement("select");
  content.appendChild(selectElement);
  let pElement = document.createElement("p");
  content.appendChild(pElement);
  for (let colour of colours) {
    let option1 = document.createElement("option");
    option1.value = colour;
    option1.innerText = colour;
    selectElement.appendChild(option1);
    selectElement.addEventListener("click", selectColours);
    function selectColours() {
      pElement.innerText = `You have selected: ${selectElement.value}`;
      pElement.style.color = selectElement.value;
    }
  }
  content.appendChild(selectElement);
}
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);
// ## Exercise

// * Create a `<select>` element.
// * Create a `<p>` element.
// * Iterate through the array of colours.
// * Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
// * Each `<option>` should have a 'click' event listener to update the contents and colour of the `<p>` with the selected colour.
// * All of your HTML should go inside the `<div>` with the id **"content"**.