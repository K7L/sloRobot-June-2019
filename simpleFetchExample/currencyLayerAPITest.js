// My Currency Layer API key 24ae58d22df615940872c7a389ec96e1

// There are 5 main API Endpoints(listed below) through which you can access different kinds of data, all starting out with this Base URL:

// http://apilayer.net/api/

// Simply attach your unique Access Key to one of the endpoints as a query parameter:
// Example query: http://www.apilayer.net/api/live?access_key=24ae58d22df615940872c7a389ec96e1

// set endpoint and your access key
endpoint = "live";
access_key = "24ae58d22df615940872c7a389ec96e1";

// get the most recent exchange rates via the "live" endpoint:
// $.ajax({
//     url: 'https://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
//     dataType: 'jsonp',
//     success: function (json) {

//         // exchange rata data is stored in json.quotes
//         alert(json.quotes.USDGBP);
//         console.log(json.quotes);
//         // source currency is stored in json.source
//         alert(json.source);
//         console.log(json.source);
//         // timestamp can be accessed in json.timestamp
//         alert(json.timestamp);
//         console.log(json.timestamp);

//     }
// });

fetch(
  "http://apilayer.net/api/live?access_key=24ae58d22df615940872c7a389ec96e1"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
