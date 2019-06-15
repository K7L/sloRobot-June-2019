// Get amount to convert
let input_fn = document.getElementById("inputAmt");
let submit = document.getElementById("submit-button");

console.log(input_fn);

function checkData() {
  if (this.value === "") {
    this.classList.add("alert");
    this.placeholder = "Required";
  }
}

// function getInputData() {
//     let data = [];
//     data.push(input_fn.value);
//     console.log("From inside getInputData ", data);
//     amtForConversion = data[0];
//     console.log(amtForConversion);
//     return amtForConversion;
// }

submit.addEventListener("click", performConversion);
input_fn.addEventListener("blur", checkData);

// Convert from the default source USD to the default destinations GBP, EUR, CAD, AUS.

// set API endpoint and your access key
endpoint = "live";
access_key = "24ae58d22df615940872c7a389ec96e1";

// Function call API and fetch exchange rate

function performConversion() {
  let data = [];
  data.push(input_fn.value);
  console.log("From inside performConversion ", data);
  let amtForConversion = data[0];
  console.log(amtForConversion);

  fetch(
    "http://apilayer.net/api/live?access_key=24ae58d22df615940872c7a389ec96e1"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let apiLiveResultString = JSON.stringify(myJson);
      console.log("This is from apiLiveResult", apiLiveResultString);
      // let exchangeRates = apiLiveResult.quotes;
      // console.log("These are the exchange rates", apiLiveResult.quotes);
      let exchangeRates = myJson.quotes;
      console.log("From myJson", exchangeRates.USDAED);
      let gbpRate = exchangeRates.USDGBP;
      let eurRate = exchangeRates.USDEUR;
      let cadRate = exchangeRates.USDCAD;
      let audRate = exchangeRates.USDAUD;
      console.log(
        "GBP=",
        gbpRate,
        "EUR=",
        eurRate,
        "CAD=",
        cadRate,
        "AUS=",
        audRate
      );
      let gbpAmt = gbpRate * amtForConversion;
      let eurAmt = eurRate * amtForConversion;
      let cadAmt = cadRate * amtForConversion;
      let audAmt = audRate * amtForConversion;

      let array = [
          ["GBP", gbpAmt],
          ["EUR", eurAmt],
          ["CAD", cadAmt],
          ["AUD", audAmt]
        ],
        table = document.getElementById("currency");

      /* Method 1 */
      // rows
      for (var i = 1; i < table.rows.length; i++) {
        // cells
        for (var j = 0; j < table.rows[i].cells.length; j++) {
          table.rows[i].cells[j].innerHTML = array[i - 1][j];
        }
      }
    });
}

// copy "quotes" object from apiLiveResult and put into exchangeRates

// let exchangeRates = apiLiveResult.quotes;
// console.log("These are the exchange rates", exchangeRates);
