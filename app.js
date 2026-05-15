

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const temp = document.getElementById("temp");
const city = document.getElementById("city");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(cityName){
  
const apiKey = "c2f8804211bb89075e1b29dc88b036cf";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiURL);
  const data = await response.json();

  temp.innerHTML = `${Math.round(data.main.temp)}°C`;
  city.innerHTML = data.name;
  condition.innerHTML = data.weather[0].main;
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed} km/h`;


  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";
  }

}

searchBtn.addEventListener("click",()=>{

  getWeather(cityInput.value);

});

getWeather("Dhaka");
