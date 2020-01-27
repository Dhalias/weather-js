var API_KEY = "3246b19ca3e8f14797448968106228aa";
var API_URL = "http://api.openweathermap.org/data/2.5/weather";
var URL = API_URL+"?q=Montreal&units=metric&APPID="+API_KEY;

window.onload = function(){
    var responseText = this.apiCall();
    this.document.getElementById("test").textContent = responseText;
}

function apiCall(){

    var display = this.document.getElementById("test");

    fetch(URL)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Error while fetching API - Status Code: ' + response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                   console.log(data);
                   display.textContent = "Température : "+data.main.temp+"\r\n";
                   display.textContent += "Pays : "+data.sys.country+"\r\n";
                   display.textContent += "Nom de la ville : "+data.name+"\r\n";
                });
            }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}


