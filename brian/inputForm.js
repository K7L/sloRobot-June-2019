let input_fn = document.getElementById("firstName");
let input_ln = document.getElementById("lastName");
let input_email = document.getElementById("email");
let submit = document.getElementById("submit-button");

function checkData() {
  if (this.value === "") {
    this.classList.add("alert");
    this.placeholder = "Required";
  }
}

function getInputData() {
  let data = [];
  data.push(input_fn.value);
  data.push(input_ln.value);
  data.push(input_email.value);
  console.log(data);
}

submit.addEventListener("click", getInputData);
input_fn.addEventListener("blur", checkData);
input_ln.addEventListener("blur", checkData);
input_email.addEventListener("blur", checkData);
