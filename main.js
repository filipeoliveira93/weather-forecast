function getUserPosition() {
    let url;

    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        // let ip = pos.coords.ip
        console.log(lat, lon);
        // let apiKey = '80aec600227c7d0265630acf11f2f8d5';
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=80aec600227c7d0265630acf11f2f8d5`;
        // url = `'https://api.hgbrasil.com/weather?key=fca3a64f&lat=${lat}&lon=${long}&user_ip=$remote'`;	

        fetchApi(url)
    });
}
function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    fetch(url)
    .then((data) => {
        // let = data.json();
        return data.json();

    })
    
    
    .then((data) => {
        console.log(data.main.temp);
        let tempInCelsius = data.main.temp.toFixed(1);
        console.log(tempInCelsius);
        city.innerText = `${data.name}`;
        temp.innerText = tempInCelsius + '°C';
        console.log(data);

    })
    
    .catch((err) => {
        // console.log(err);
        // city.innerText = 'Error';
        // temp.innerText = ' - ';
    });
};
getUserPosition()
// fetchApi(url)
