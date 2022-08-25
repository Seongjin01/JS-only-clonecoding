
const API_KEY = "0e1267eae77dcf67d3f3ecfc2964f18b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.433793279778065&lon=127.14554067849804&appid=0e1267eae77dcf67d3f3ecfc2964f18b&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = `${data.name} `;
            weather.innerText =  `${data.weather[0].main}`;
        })
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);