let input_fn = document.getElementById("inputAmt");
let submit = document.getElementById("submit-button");

console.log(input_fn);

function checkData() {
  if (this.value === "") {
    this.classList.add("alert");
    this.placeholder = "Required";
  }
}

function getInputData() {
  let data = [];
  data.push(input_fn.value);
  console.log(data);
}

submit.addEventListener("click", getInputData);
input_fn.addEventListener("blur", checkData);
