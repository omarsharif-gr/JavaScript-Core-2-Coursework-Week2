// ## Part 1

// Overview - When clicking on the buttons you should be able to change the "theme" of the website:

let jumbotronChange = document.querySelector(".jumbotron")
let blueBtn = document.querySelector("#blueBtn")
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

blueBtn.addEventListener('click', changeBlueBtn)
function changeBlueBtn() {
    jumbotronChange.style.backgroundColor = "#588fbd"
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}
// - When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`

orangeBtn.addEventListener('click', changeOrangeBtn)
function changeOrangeBtn() {
    jumbotronChange.style.backgroundColor = "#f0ad4e"
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

// - When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

greenBtn.addEventListener('click', changeGreenBtn)
function changeGreenBtn() {
    jumbotronChange.style.backgroundColor = "#87ca8a"
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
}

// ## Part 2

let submitButton = document.querySelector("form button");
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
})
let sectionsOfForm = document.querySelectorAll(".form-control")
let sectionOfFormCorrect = true;
//Treat as array
for (i = 0; i < sectionsOfForm.length; i++) {
    if (sectionsOfForm[i].value.length < 1 || !sectionsOfForm[0].value.includes("@")) {
        sectionsOfFormCorrect = false;
        sectionsOfForm[i].style.backgroundColor = "red";
    }
    else {
        sectionsOfForm[i].style.backgroundColor = "transparent"
        alert("thank you for filling out the form")
    }
}

  if(sectionsOfFormCorrect) {
    sectionsOfForm.forEach((field) => field.value = " ")

    alert("Thank you for filling out the form");
  };
//add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character

// For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click **Submit** it should:

// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

// **Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
