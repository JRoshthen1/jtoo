const locationElement = document.getElementById('location')
const tempElement = document.getElementById('temperature')
const iconElement = document.getElementById('weatherIcon')
const descriptionElement = document.getElementById('description')
const windSpeedElement = document.getElementById('windSpeed')
const windDirectionElement = document.getElementById('windDirection')

function getWeather() {

let url = 'https://api.weatherapi.com/v1/current.json?key=b9f3b87fd5e644a88dc150433222607&q=Hämeenlinna&aqi=no';
//https://www.weatherapi.com/
fetch(url).then(function(response) {
    let data = response.json();
    return data;
}).then(


function displayWeather(data) {
    iconElement.src = data.current.condition.icon
    locationElement.innerHTML = data.location.name;
    tempElement.innerHTML = `${data.current.temp_c}°C`;
    descriptionElement.innerHTML = data.current.condition.text;
    windSpeedElement.innerHTML = `${data.current.wind_kph} km/h`;
    windDirectionElement.innerHTML = data.current.wind_dir;
//   console.log(data.current) // Console log all the current data
})}

getWeather()

