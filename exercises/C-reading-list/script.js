function readingList(books) {
  let contents = document.querySelector("#content")
  let unorderedList = document.createElement("ul")
  for (booksReading of books) {
    let createList = document.createElement("li")
    let createdPEl = document.createElement("p")
    createdPEl.innerText = `${booksReading.title} - ${booksReading.author}`
    createList.appendChild(createdPEl)
    contents.appendChild(createList)
    if (booksReading.alreadyRead === true) {
      createdPEl.style.backgroundColor = "green";
    }
    else {
      createdPEl.style.backgroundColor = "red"
    }
    if (booksReading.title === "The Design of Everyday Things") {
      var image1 = document.createElement("img");
      image1.setAttribute("src", "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/large/9780/4650/9780465050659.jpg") 
      createdPEl.appendChild(image1)
    }
    else if (booksReading.title === "The Most Human Human") {
      var image2 = document.createElement("img");
      image2.setAttribute("src", "https://images.penguinrandomhouse.com/cover/9780307476708")
      createdPEl.appendChild(image2)
    }
    else {
      var image3 = document.createElement("img");
      image3.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg")
      createdPEl.appendChild(image3)
    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);

// Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

// ## Exercise

// - Iterate through the list of books.
// - For each book, create a `<p>` element with the book title and author and
//  append it to the page.
// - Use a `<ul>` and `<li>` to display the books.
// - Add an `<img>` to each book that links to a URL of the book cover.
// - Change the style of the book depending on whether you have read it (green) or not (red).
// - All of your HTML should go inside the `<div>` with the id **"content"**.

// The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/