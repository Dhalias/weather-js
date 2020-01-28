var API_KEY = "3246b19ca3e8f14797448968106228aa";
var API_URL = "http://api.openweathermap.org/data/2.5/weather";

window.onload = function(){
    this.document.getElementById("getInfo").addEventListener("click",getInfo());
}

function getInfo(){
    var cityName = this.document.getElementById('cityNameInput').value;
    var url = API_URL+"?q="+cityName+"&units=metric&APPID="+API_KEY;
    this.apiCall(url);
}

function apiCall(url){

    fetch(url)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Error while fetching API - Status Code: ' + response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                   console.log(data);
                });
            }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


