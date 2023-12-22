let cityDisp = document.getElementById('city');
let currentTempDisp = document.getElementById('currentTemp');
let feelsLikeDisp = document.getElementById('feelsLike');
let currentWeather = document.getElementById('currentWeather');
let tomorrowWeather = document.getElementById('tomorrowWeather');

let tmrwConditionDisp = document.getElementById('tmrwCondition');
let tmrwTempF = document.getElementById('tmrwTemp');
let tmrwChanceOfRain = document.getElementById('tmrwChanceOfRain');

let locationInput = document.getElementById('location');
const form = document.querySelector('form');

const testObj = {
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(locationInput.value);
    fetchWeatherAsync(locationInput.value);
    locationInput.value = '';

})

// function fetchWeather(city){
//     clearDisplay();
//     cityDisp.textContent = 'loading...'

//     fetch(`https://api.weatherapi.com/v1/forecast.json?key=114c9814adb249ad98861207231312&q=${city}&days=3&aqi=yes&alerts=no`, {
//         mode: 'cors'
//     })
//     .then(function(response){
//         return response.json();
        
//     })
//     .then(function(response){
//         console.log(response);


//         // console.log(response.current.feelslike_f);
//         testObj.cityDisp = response.location.name;
//         testObj.stateDisp = response.location.region;
//         testObj.countryDisp = response.location.country;

//         testObj.currentTempF = response.current.temp_f;
//         testObj.feelsLikeF = response.current.feelslike_f;
//         testObj.condition = response.current.condition.text;

//         testObj.tmrwTempF = response.forecast.forecastday[0].day.avgtemp_f;
//         testObj.tmrwCondition = response.forecast.forecastday[0].day.condition.text;
//         testObj.tmrwChanceOfRain = response.forecast.forecastday[0].day.daily_chance_of_rain;

//         // console.log(testObj);


//         currentWeather.style.border = '1px solid black';
//         tomorrowWeather.style.border = '1px solid black';
//         if (testObj.stateDisp === ''){
//             cityDisp.textContent = `${testObj.cityDisp}, ${testObj.countryDisp}`;
//         }else{
//             cityDisp.textContent = `${testObj.cityDisp}, ${testObj.stateDisp}`;
//         }

//         currentTempDisp.textContent = `${testObj.currentTempF}°F, ${testObj.condition}`;
//         feelsLikeDisp.textContent = `Feels like ${testObj.feelsLikeF}°F`;

//         tmrwHeader.textContent = `Tomorrow`;
//         tmrwTempF.textContent = `${testObj.tmrwTempF}°F, ${testObj.tmrwCondition}`;
//         tmrwChanceOfRain.textContent = `Chance of rain: ${testObj.tmrwChanceOfRain}%`;
    
//     })
//     .catch((err) => {
//         let message = err.code;
//         console.log(JSON.stringify(err.message));
//         // cityDisp.textContent = `${err.error}`;
//     });    
// }

async function fetchWeatherAsync(city){
    clearDisplay();
    cityDisp.textContent = 'loading...'

    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=114c9814adb249ad98861207231312&q=${city}&days=3&aqi=yes&alerts=no`, {
            mode: 'cors'
        })
        const weatherData = await response.json();
        // console.log(weatherData);
        setDisplay(testObj, weatherData);        
    } catch(err){
        cityDisp.textContent = 'Error. Try again.'
    }    
}

function clearDisplay(){
    cityDisp.textContent = ``;
    currentTempDisp.textContent = ``;
    feelsLikeDisp.textContent = ``;

    tmrwHeader.textContent = ``;
    tmrwTempF.textContent = '';
    tmrwConditionDisp.textContent = ``;
    tmrwChanceOfRain.textContent = ``;
}

function setDisplay(testObj, response){
    // console.log(response.current.feelslike_f);
    testObj.cityDisp = response.location.name;
    testObj.stateDisp = response.location.region;
    testObj.countryDisp = response.location.country;

    testObj.currentTempF = response.current.temp_f;
    testObj.feelsLikeF = response.current.feelslike_f;
    testObj.condition = response.current.condition.text;

    testObj.tmrwTempF = response.forecast.forecastday[0].day.avgtemp_f;
    testObj.tmrwCondition = response.forecast.forecastday[0].day.condition.text;
    testObj.tmrwChanceOfRain = response.forecast.forecastday[0].day.daily_chance_of_rain;

    // console.log(testObj);


    currentWeather.style.border = '1px solid black';
    tomorrowWeather.style.border = '1px solid black';
    if (testObj.stateDisp === ''){
        cityDisp.textContent = `${testObj.cityDisp}, ${testObj.countryDisp}`;
    }else{
        cityDisp.textContent = `${testObj.cityDisp}, ${testObj.stateDisp}`;
    }

    currentTempDisp.textContent = `${testObj.currentTempF}°F, ${testObj.condition}`;
    feelsLikeDisp.textContent = `Feels like ${testObj.feelsLikeF}°F`;

    tmrwHeader.textContent = `Tomorrow`;
    tmrwTempF.textContent = `${testObj.tmrwTempF}°F, ${testObj.tmrwCondition}`;
    tmrwChanceOfRain.textContent = `Chance of rain: ${testObj.tmrwChanceOfRain}%`;
}