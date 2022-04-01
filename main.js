function getUserPosition() {
    let url

        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            console.log(lat, lon);
            url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=80aec600227c7d0265630acf11f2f8d5`;
            
            fetchApi(url);
    });

}

async function fetchApi(url) {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    }
    
getUserPosition()
