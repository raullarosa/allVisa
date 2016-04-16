// var request = require('request');
// var req = request.defaults();

var fs = Npm.require('fs');

var keyFile = "./assets/app/key/key_TestApp.pem"
var certFile = "./assets/app/key/cert.pem"
var userId = "LCEYP3MP4GJ04K4M3WRY21k0Kx9YZIK0IeWu_5hNa-_Jo2daQ"
var password = "z9XcEImO9oSA4ey"

var data = JSON.stringify({
  "systemsTraceAuditNumber": "451001",
  "retrievalReferenceNumber": "330000550000",
  "localTransactionDateTime": "2016-01-21T13:32:01",
  "acquiringBin": "408999",
  "acquirerCountryCode": "840",
  "senderPrimaryAccountNumber": "4895142232120006",
  "senderCardExpiryDate": "2015-10",
  "senderCurrencyCode": "USD",
  "amount": "124.02",
  "businessApplicationId": "AA",
  "surcharge": "11.99",
  "foreignExchangeFeeTransaction": "11.99",
  "cavv": "0700100038238906000013405823891061668252",
  "cardAcceptor": {
    "name": "Visa Inc. USA-Foster City",
    "terminalId": "ABCD1234",
    "idCode": "ABCD1234ABCD123",
    "address": {
      "state": "CA",
      "county": "San Mateo",
      "country": "USA",
      "zipCode": "94404"
    }
  }
});


request.get({
  uri: "https://sandbox.api.visa.com/vdp/helloworld",
  key: fs.readFileSync(keyFile),
  cert: fs.readFileSync(certFile),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
  },
  // body: data
}, function (error, response, body) {
  if (!error) {
    console.log("Response Code: " + response.statusCode);
    console.log("Headers:");
    for (var item in response.headers) {
      console.log(item + ": " + response.headers[item]);
    }
    console.log("Body: " + body);
  } else {
    console.log("Got error: " + error.message);
  }
}
);



// request.post({
//     uri : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions",
//     key: fs.readFileSync(key),  
//     cert: fs.readFileSync(cert),
//     headers: {
//       'Content-Type' : 'application/json',
//       'Accept' : 'application/json',
//       'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
//     },
//     body: data
//   }, function(error, response, body) {
//     if (!error) {
//       console.log("Response Code: " + response.statusCode);
//       console.log("Headers:");
//       for(var item in response.headers) {
//         console.log(item + ": " + response.headers[item]);
//       }
//       console.log("Body: "+ body);
//     } else {
//       console.log("Got error: " + error.message);
//     }
//   }
// );  


// request.post({
//     uri : "https://sandbox.api.visa.com/…",
//     key: fs.readFileSync(key),
//     cert: fs.readFileSync(cert),
//     headers: {
//       'Content-Type' : 'application/json',
//       'Accept' : 'application/json',
//       'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
//     },
//     body: data
//   }, function(error, response, body) {
//     console.log(response)
//   }
// );

// // var request = require('request');
// // var fs = require('fs');

// var data = JSON.stringify({
//     "systemsTraceAuditNumber" : "451001",
//     "retrievalReferenceNumber" : "330000550000",
//     "localTransactionDateTime" : "2016-01-21T13:32:01",
//     "acquiringBin" : "408999",
//     "acquirerCountryCode" : "840",
//     "senderPrimaryAccountNumber" : "4895142232120006",
//     "senderCardExpiryDate" : "2015-10",
//     "senderCurrencyCode" : "USD",
//     "amount" : "124.02",
//     "businessApplicationId" : "AA",
//     "surcharge" : "11.99",
//     "foreignExchangeFeeTransaction" : "11.99",
//     "cavv" : "0700100038238906000013405823891061668252",
//     "cardAcceptor" : {
//         "name" : "Visa Inc. USA-Foster City",
//         "terminalId" : "ABCD1234",
//         "idCode" : "ABCD1234ABCD123",
//         "address" : {
//             "state" : "CA",
//             "county" : "San Mateo",
//             "country" : "USA",
//             "zipCode" : "94404"
//         }
//     }
// });


