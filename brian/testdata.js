let test1 = document.getElementById("From testdata!");

let data = [
  { firstName: "Adam", lastName: "Smith", email: "asmith@gmail.com" },
  { firstName: "Lisa", lastName: "Brown", email: "lbrown@yahoo.com" },
  { firstName: "Juan", lastName: "Cortez", email: "jcortez@gmail.com" },
  { firstName: "Maria", lastName: "Chan", email: "mchan@yahoo.com" }
];

let testTable = document.getElementById("testTable");

let mainTable = document.getElementById("mainTable");
let row = document.createElement("tr");
let firstCell = document.createElement("td");
let lastCell = document.createElement("td");
let emailCell = document.createElement("td");
data.forEach(function(element) {
  mainTable.appendChild(row);
  firstCell.innerHTML = element.firstName;
  lastCell.innerHTML = element.lastName;
  emailCell.innerHTML = element.email;
  mainTable.appendChild(firstCell);
  mainTable.appendChild(lastCell);
  mainTable.appendChild(emailCell);
});

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

// This method allows you to print anything to html as long as you call out the ID:
document.getElementById("priority").innerHTML = "Priority 1";

// get month

function month() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("month").innerHTML = n;
}

month();

let d = new Date();
document.getElementById("time").innerHTML = d;

//Breadcrumbs

//https://www.w3schools.com/js/js_output.asp

// Exercise: Create a to do list application

// todoList function used on button click to get user input and
function todoList() {
  // store user value
  var item = document.getElementById("todoInput").value;
  // create a text node from the user input
  var text = document.createTextNode(item);
  // create a li tag
  var newItem = document.createElement("li");
  // add the user input to the li tag
  newItem.appendChild(text);
  // append the li to the html todoList id tag
  document.getElementById("todoList").appendChild(newItem);
}

let basicH1 = document.getElementById("basicH1");
let button01 = document.getElementById("button01");
let blueButton = document.getElementById("blueButton");
let image01 = document.getElementById("img01");

function changeH1() {
  if (basicH1.innerHTML === "This is a heading") {
    basicH1.innerHTML = "Changed by JavaScript Magic!";
    image01.src = "./images/marvin02.jpg";
  } else {
    basicH1.innerHTML = "This is a heading";
    image01.src = "./images/marvin01.jpg";
  }
}

function makeBlue() {
  if (basicH1.classList.contains("blue")) {
    basicH1.classList.remove("blue");
  } else {
    basicH1.classList.add("blue");
  }
}

button01.addEventListener("click", test1);
blueButton.addEventListener("click", makeBlue);
