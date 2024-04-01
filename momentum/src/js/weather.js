const API_KEY = "f888283a318825fe7083f2a2113fa707"

function onGeoOK(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const url  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector('#city')
        const weather = document.querySelector('#weather')
        const temp = document.querySelector('#temp')

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;

    });
}

function onGeoError() {
    alert("날씨 정보를 제공해드릴 수 없어요")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);