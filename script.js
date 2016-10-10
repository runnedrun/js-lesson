function getApi(callMeWithData) {
  // get the Api
  var data = "hi there"
  callMeWithData(data)
}

getApi(function(data) {
  console.log("API COMPLETE!" + data)
})

