const locationElement = document.getElementById('location')
const tempElement = document.getElementById('temperature')
const iconElement = document.getElementById('weatherIcon')
const descElement = document.getElementById('description')

function getWeather() {

let url = 'https://api.weatherapi.com/v1/current.json?key=b9f3b87fd5e644a88dc150433222607&q=copenhagen&aqi=no';
//https://www.weatherapi.com/
fetch(url).then(function(response) {
    let data = response.json();
    return data;
}).then(


function displayWeather(data) {
    iconElement.src = data.current.condition.icon
    locationElement.innerHTML = data.location.name;
    tempElement.innerHTML = `${data.current.temp_c}°C`;
    descElement.innerHTML = data.current.condition.text;
//    console.log(data.current) // Console log all the current data
}
)
}
getWeather()