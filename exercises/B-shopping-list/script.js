function shoppingList(arrayOfPeople) {
  let addedContent = document.querySelector("#content")
  let unorderedList = document.createElement("ul")
  for (listOfItems of arrayOfPeople) {
    let listItems = document.createElement("li");
    listItems.innerText = listOfItems;
    unorderedList.appendChild(listItems)
  }
  addedContent.appendChild(unorderedList)
}
let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
shoppingList(shopping);

// Create a list of shopping items on the page.

// ## Exercise

// * You should use an unordered list: `<ul>`.
// * Each item from the array should be in a `<li>` tag.
// * All of your HTML should go inside the `<div>` with the id **"content"**.

