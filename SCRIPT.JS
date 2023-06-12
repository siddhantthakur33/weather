const apiKey= "7f8f3a9acb3b2b28dbac1e73b8a07492";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none";
    }
    var data = await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".tempp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humiditiy").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "image/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "image/Rain.png";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png";
    } 
    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";


}
    searchBtn.addEventListener("click", ()=>{
        checkweather(searchBox.value);
    })




