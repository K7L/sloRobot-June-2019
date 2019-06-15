let input_amt = document.getElementById("inputAmt");

console.log(input_amt);

// function checkData() {
//   if (this.value === "") {
//     this.classList.add("alert");
//     this.placeholder = "Required";
//   }
// }

function getInputData() {
  let data = [];
  data.push(input_amt.value);
  return data;
}

submit.addEventListener("click", getInputData);

console.log(getInputData(input_amt));
