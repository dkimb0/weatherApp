

let cityDisp = document.getElementById('city');
let currentTempDisp = document.getElementById('currentTemp');
let feelsLikeDisp = document.getElementById('feelsLike');
let conditionDisp = document.getElementById('condition');

let locationInput = document.getElementById('location');
const form = document.querySelector('form');

const testObj = {
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log(locationInput.value);
    fetchWeather(locationInput.value);
})


function fetchWeather(city){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=114c9814adb249ad98861207231312&q=${city}&days=3&aqi=yes&alerts=no`, {
        mode: 'cors'
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
    
        // console.log(response.current.feelslike_f);
        testObj.cityDisp = response.location.name;
        testObj.currentTempF = response.current.temp_f;
        testObj.feelsLikeF = response.current.feelslike_f;
        testObj.condition = response.current.condition.text;
        console.log(testObj);
    
        cityDisp.textContent = `${testObj.cityDisp}`;
        currentTempDisp.textContent = `Current Temperature: ${testObj.currentTempF}F`;
        feelsLikeDisp.textContent = `Feels like: ${testObj.feelsLikeF}F`;
        conditionDisp.textContent = `${testObj.condition}`;
    
    })
    .catch(function(err){
        console.log(err.error.message);
        console.log('Error: wrong input');
    });    
}
