let axios = require(`axios`).default;
let now = new Date();
console.log(now);
let weekDays = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];
let weekDay = weekDays[now.getDay()];
let day = now.getDate();
let months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let timeHours = now.getHours();
let timeMinutes = now.getMinutes();
if (timeHours < 10) {
  timeHours = "0" + now.getHours();
}
if (timeMinutes < 10) {
  timeMinutes = "0" + now.getMinutes();
}

//display date
let date = document.querySelector("#current-date");
date.innerHTML = `${weekDay}, ${day} ${month} ${year} ${timeHours}:${timeMinutes}`;

//Holidays of Nature - transform in an array and call it (in progress)
if ((`${month}` === `January`) & (`${day}` === `26`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Education!!";
}
if ((`${month}` === `January`) & (`${day}` === `31`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Zebra Day!!!";
}
if ((`${month}` === `February`) & (`${day}` === `2`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Wetlands Day!!";
}
if ((`${month}` === `February`) & (`${day}` === `15`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Hippopotamus Day!!!";
}
if ((`${month}` === `February`) & (`${day}` === `20`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Day of Social Justice!!";
}

if ((`${month}` === `February`) & (`${day}` === `27`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Polar Bear Day!!!";
}

if ((`${month}` === `March`) & (`${day}` === `1`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Action for Rivers!!";
}
if ((`${month}` === `March`) & (`${day}` === `3`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Wildlife Day!!";
}
if ((`${month}` === `March`) & (`${day}` === `8`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Women's Day!!";
}

if ((`${month}` === `March`) & (`${day}` === `15`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Consumer Rights Day!!";
}
if ((`${month}` === `March`) & (`${day}` === `18`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Global Recycling Day!!";
}
if ((`${month}` === `March`) & (`${day}` === `20`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Sparrow Day!!! and World Frog Day!!!";
}
if ((`${month}` === `March`) & (`${day}` === `21`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "Today is International Day of Forests!! and World Planting Day!! Go plant a tree!";
}
if ((`${month}` === `March`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Water Day!!";
}
if ((`${month}` === `March`) & (`${day}` === `23`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Meteorological Day!!";
}
if ((`${month}` === `April`) & (`${day}` === `7`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Health Day!!";
}
if ((`${month}` === `April`) & (`${day}` === `10`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Arbor Day!!";
}
if ((`${month}` === `April`) & (`${day}` === `18`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Heritage Day!!";
}
if ((`${month}` === `April`) & (`${day}` === `21`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Fish Migration Day!!";
}
if ((`${month}` === `April`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Earth Day!!";
}
if ((`${month}` === `May`) & (`${day}` === `20`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Bee Day!!!";
}
if ((`${month}` === `May`) & (`${day}` === `21`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Fish Migration Day!!!";
}
if ((`${month}` === `May`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day for Biological Diversity!!";
}
if ((`${month}` === `May`) & (`${day}` === `23`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Turtle Day!!!";
}
if ((`${month}` === `June`) & (`${day}` === `5`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Environment Day!!";
}
if ((`${month}` === `June`) & (`${day}` === `8`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Oceans Day!!";
}
if ((`${month}` === `June`) & (`${day}` === `17`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Day to Combat Desertification!!";
}
if ((`${month}` === `June`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Rainforest Day!!";
}
if ((`${month}` === `June`) & (`${day}` === `29`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of the Tropics!!";
}
if ((`${month}` === `July`) & (`${day}` === `11`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Population Day!!";
}
if ((`${month}` === `August`) & (`${day}` === `9`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day of the World's Indigenous People!!";
}
if ((`${month}` === `August`) & (`${day}` === `12`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Youth Day!!";
}
if ((`${month}` === `September`) & (`${day}` === `8`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Literacy Day!!";
}
if ((`${month}` === `September`) & (`${day}` === `16`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day for the Preservation of the Ozone Layer!!";
}
if ((`${month}` === `September`) & (`${day}` === `21`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Peace!!";
}
if ((`${month}` === `October`) & (`${day}` === `2`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Day for Farmed Animals!!!";
}
if ((`${month}` === `October`) & (`${day}` === `3`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Habitat Day!!";
}
if ((`${month}` === `October`) & (`${day}` === `4`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Animal Welfare Day!!";
}
if ((`${month}` === `October`) & (`${day}` === `12`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Migratory Bird Day!!!";
}
if ((`${month}` === `October`) & (`${day}` === `13`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day for Natural Disaster Reduction!!!";
}
if ((`${month}` === `October`) & (`${day}` === `16`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Food Day!!";
}
if ((`${month}` === `November`) & (`${day}` === `6`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day for Preventing the Exploitation of the Environment in War and Armed Conflict!!";
}
if ((`${month}` === `December`) & (`${day}` === `5`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Volunteer Day!! World Soil Day!!";
}
if ((`${month}` === `December`) & (`${day}` === `10`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Human Rights Day!!!";
}
if ((`${month}` === `December`) & (`${day}` === `11`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Mountain Day!!!";
}
function showWeather(response) {
  console.log(response.data);
  //local
  let local = response.data.name;
  let city = document.querySelector("#location");
  city.innerHTML = `${local}`;
  //description
  let description = response.data.weather[0].description;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = `${description}`;
  //temperature
  let celsius = response.data.main.temp;
  let celsiusRound = Math.round(`${celsius}`);
  let tempValueC = document.querySelector("#temp-value-C");
  tempValueC.innerHTML = `${celsiusRound}ºC`;
  let fahrenheit = Math.round((`${celsius}` * 9) / 5 + 32);
  let tempValueF = document.querySelector("#temp-value-F");
  tempValueF.innerHTML = `${fahrenheit}ºF`;
  //precipitation
  let humidity = response.data.main.humidity;
  let humidValue = document.querySelector("#humid-value");
  humidValue.innerHTML = `${humidity}%`;
  ///wind
  let windSpeed = response.data.wind.speed;
  let windDegrees = response.data.wind.deg;

  if ((windDegrees === "0") | (windDegrees === "360")) {
    windDegrees = "N";
  }

  if ((windDegrees > "0") & (windDegrees < "90")) {
    windDegrees = "NE";
  }
  if (windDegrees === "90") {
    windDegrees = "E";
  }
  if ((windDegrees > "90") & (windDegrees < "180")) {
    windDegrees = "SE";
  }
  if (windDegrees === "180") {
    windDegrees = "S";
  }
  if ((windDegrees > "180") & (windDegrees < "270")) {
    windDegrees = "SW";
  }
  if (windDegrees === "270") {
    windDegrees = "W";
  }
  if ((windDegrees > "270") & (windDegrees < "360")) {
    windDegrees = "NW";
  }

  let windValues = document.querySelector("#wind-values");
  windValues.innerHTML = `
${windSpeed}m/s
${windDegrees}`;
  //UV index in progress
 
}

//images in progress
//special dates in progress
//forecast in progress

function citySearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#inlineFormInputGroup");
  searchCity.value = searchCity.value.trim();
  searchCity.value = searchCity.value.toUpperCase();
  searchCity.value = searchCity.value.toLowerCase();
  let apiWeatherKey = "c55a735461d1622ed3b65499c272f01c";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    searchCity.value
  }&appid=${apiWeatherKey}&units=metric`;
  axios.get(`${weatherUrl}`).then(showWeather);
  if (searchCity.value === "") {
    alert("Please type a city");
    location.reload();
  }
}
let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", citySearch);

function localWeather(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let urlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c55a735461d1622ed3b65499c272f01c&units=metric`;
  axios.get(`${urlPosition}`).then(showWeather);
}

function retrieveLocal(position) {
  navigator.geolocation.getCurrentPosition(localWeather);
}
let localpositionButton = document.querySelector("#current-location");
localpositionButton.addEventListener("click", retrieveLocal);