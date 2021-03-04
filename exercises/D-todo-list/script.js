function todoList(todos) {
  let contents = document.querySelector("#content")
  let unorderedList = document.createElement("ul")
  for (toDoActions of todos) {
    let createList = document.createElement("li");
    createList.addEventListener('click', whenLinksClicked)
    function whenLinksClicked() {
      if (createList.style.textDecoration !== "line-through") {
        createList.style.textDecoration = "line-through";
      } else {
        createList.style.textDecoration = "none";
      }
    }
  unorderedList.appendChild(createList);                                             //Append each new list "li" to our "ul" at the top
  }
  contents.appendChild(unorderedList); 
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
//  text-decoration: line-through;

// We want to render a list of todos on the page. When we click on an item we want a line-through style to be added to it to show that the todo has been completed. If we decide we haven't actually finished the todo yet, then we should be able to click it again to remove the line-through styling.

// ## Exercise

// * You should use an `<ul>` for the list and `<li>` tags for the contents.
// * Each todo should have an event listener for when they are clicked.
// * The event listener should add the line-through style to the todo.
// * The event listener should also remove the line-through style conditionally by checking if the style is already applied.
// * All of your HTML should go inside the `<div>` with the id **"content"**.