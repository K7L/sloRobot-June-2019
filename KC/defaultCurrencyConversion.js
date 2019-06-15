// Convert from the default source USD to the default destinations GBP, EUR, CAD, AUS.

// set API endpoint and your access key
endpoint = "live";
access_key = "24ae58d22df615940872c7a389ec96e1";
let amtForConversion = 2;

// Call API and fetch exchange rate

fetch(
    "http://apilayer.net/api/live?access_key=24ae58d22df615940872c7a389ec96e1"
)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
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
        console.log("GBP=", gbpRate, "EUR=", eurRate, "CAD=", cadRate, "AUS=", audRate);
        let gbpAmt = gbpRate * amtForConversion;
        let eurAmt = eurRate * amtForConversion;
        let cadAmt = cadRate * amtForConversion;
        let audAmt = audRate * amtForConversion;




    });

// copy "quotes" object from apiLiveResult and put into exchangeRates

// let exchangeRates = apiLiveResult.quotes;
// console.log("These are the exchange rates", exchangeRates);
