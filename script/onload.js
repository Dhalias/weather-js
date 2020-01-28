var API_KEY = "3246b19ca3e8f14797448968106228aa";
var API_URL = "http://api.openweathermap.org/data/2.5/weather";
var errorMsg;
var infoMsg;
var cityName;

var cityTemp_display;
var cityCountry_display;
var cityName_display;
var cityPressure_display;
var cityHumidity_display;
var cityWind_display;
var cityLong_display;
var cityLat_display;

window.onload = function(){
    this.document.getElementById("getInfo").addEventListener("click",getInfo);
    errorMsg = this.document.getElementById('errorMsg');
    infoMsg = this.document.getElementById('resultat');
    cityName = this.document.getElementById("cityNameInput");

    cityTemp_display = this.document.getElementById('cityTemp');
    cityCountry_display = this.document.getElementById('cityCountry');
    cityName_display = this.document.getElementById('cityName');
    cityPressure_display = this.document.getElementById('cityPressure');
    cityHumidity_display = this.document.getElementById('cityHumidity');
    cityWind_display = this.document.getElementById('cityWind');
    cityLong_display = this.document.getElementById('cityLong');
    cityLat_display = this.document.getElementById('cityLat');
}

function getInfo(){
    if(cityName.value === ""){
        errorMsg.style.display = "block";
    }else{
        errorMsg.style.display = "none";
        var url = API_URL+"?q="+cityName.value+"&units=metric&APPID="+API_KEY;
        apiCall(url);
    }
    
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
                    updateWeatherInfo(data);
                    infoMsg.style.display = 'block';
                });
            }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function updateWeatherInfo(data){
    cityTemp_display.textContent = data.main.temp;
    cityCountry_display.textContent = getCountryName(data.sys.country);
    cityName_display.textContent = data.name;
    cityPressure_display.textContent = data.main.pressure;
    cityHumidity_display.textContent = data.main.humidity;
    cityWind_display.textContent = data.wind.speed;
    cityLong_display.textContent = data.coord.lon;
    cityLat_display.textContent = data.coord.lat;
}


