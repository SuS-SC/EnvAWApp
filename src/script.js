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

//display days of week for forecast
let forecastdayToday = weekDay.substring(0, 3);
let forecastday = document.querySelector("#today");
forecastday.innerHTML = `${forecastdayToday}`;

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let forecastDay1 = document.querySelector("#tomorrow");
forecastDay1.innerHTML = `${tomorrow}`.substring(0, 3);

let secondDay = new Date();
secondDay.setDate(secondDay.getDate() + 2);
let forecastDay2 = document.querySelector("#second-day");
forecastDay2.innerHTML = `${secondDay}`.substring(0, 3);

let thirdDay = new Date();
thirdDay.setDate(thirdDay.getDate() + 3);

let forecastDay3 = document.querySelector("#third-day");
forecastDay3.innerHTML = `${thirdDay}`.substring(0, 3);

let forthDay = new Date();
forthDay.setDate(forthDay.getDate() + 4);
let forecastDay4 = document.querySelector("#forth-day");
forecastDay4.innerHTML = `${forthDay}`.substring(0, 3);

//Holidays of Nature - transform in an array and call it (in progress)
if ((`${month}` === `January`) & (`${day}` === `26`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Education!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/education_640.jpg`;
  educationDay.setAttribute("alt", `education`);
}
if ((`${month}` === `January`) & (`${day}` === `31`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Zebra Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/zebra_640.jpg`;
  educationDay.setAttribute("alt", `zebra`);
}
if ((`${month}` === `February`) & (`${day}` === `2`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Wetlands Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/wetlands_640.jpg`;
  educationDay.setAttribute("alt", `wetland`);
}
if ((`${month}` === `February`) & (`${day}` === `15`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Hippopotamus Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/hippo_640.jpg`;
  educationDay.setAttribute("alt", `hippo`);
}

if ((`${month}` === `February`) & (`${day}` === `27`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Polar Bear Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/polar-bear_640.jpg`;
  educationDay.setAttribute("alt", `polar bear`);
}

if ((`${month}` === `March`) & (`${day}` === `1`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Action for Rivers!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/river_640.jpg`;
  educationDay.setAttribute("alt", `river`);
}

if ((`${month}` === `March`) & (`${day}` === `3`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Wildlife Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/wildlife_640.jpg`;
  educationDay.setAttribute("alt", `wildlife`);
}

if ((`${month}` === `March`) & (`${day}` === `18`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Global Recycling Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/recycle_640.jpg`;
  educationDay.setAttribute("alt", `recycle`);
}
if ((`${month}` === `March`) & (`${day}` === `20`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Frog Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/frog_640.jpg`;
  educationDay.setAttribute("alt", `frog`);
}
if ((`${month}` === `March`) & (`${day}` === `21`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day of Forests!! and World Planting Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/planting_640.jpg`;
  educationDay.setAttribute("alt", `planting`);
}
if ((`${month}` === `March`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Water Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/drop_640.jpg`;
  educationDay.setAttribute("alt", `water`);
}
if ((`${month}` === `March`) & (`${day}` === `23`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Meteorological Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/meteo_640.jpg`;
  educationDay.setAttribute("alt", `meteoreology`);
}
if ((`${month}` === `April`) & (`${day}` === `7`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Health Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/health_640.jpg`;
  educationDay.setAttribute("alt", `health`);
}
if ((`${month}` === `April`) & (`${day}` === `10`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Arbor Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/tree_640.jpg`;
  educationDay.setAttribute("alt", `arboring`);
}
if ((`${month}` === `April`) & (`${day}` === `18`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Heritage Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/heritage_640.jpg`;
  educationDay.setAttribute("alt", `heritage`);
}

if ((`${month}` === `April`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Earth Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/earth_640.jpg`;
  educationDay.setAttribute("alt", `earth`);
}

if ((`${month}` === `May`) & (`${day}` === `16`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Fish Migration Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/fish_640.jpg`;
  educationDay.setAttribute("alt", `migrating fish`);
}
if ((`${month}` === `May`) & (`${day}` === `20`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Bee Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/bee_640.jpg`;
  educationDay.setAttribute("alt", `bee`);
}

if ((`${month}` === `May`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day for Biological Diversity!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/biodiversity_640.jpg`;
  educationDay.setAttribute("alt", `biodiversity`);
}
if ((`${month}` === `May`) & (`${day}` === `23`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Turtle Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/turtle_640.jpg`;
  educationDay.setAttribute("alt", `turtle`);
}
if ((`${month}` === `June`) & (`${day}` === `5`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Environment Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/environment_640.jpg`;
  educationDay.setAttribute("alt", `environment`);
}
if ((`${month}` === `June`) & (`${day}` === `8`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Oceans Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/ocean_640.jpg`;
  educationDay.setAttribute("alt", `ocean`);
}
if ((`${month}` === `June`) & (`${day}` === `17`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Day to Combat Desertification!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/desertification_640.jpg`;
  educationDay.setAttribute("alt", `desertification`);
}
if ((`${month}` === `June`) & (`${day}` === `22`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Rainforest Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/rainforest_640.jpg`;
  educationDay.setAttribute("alt", `rainforest`);
}
if ((`${month}` === `June`) & (`${day}` === `29`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of the Tropics!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/tropics_640.jpg`;
  educationDay.setAttribute("alt", `tropics`);
}
if ((`${month}` === `July`) & (`${day}` === `11`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Population Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/population_640.jpg`;
  educationDay.setAttribute("alt", `population`);
}
if ((`${month}` === `August`) & (`${day}` === `9`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day of the World's Indigenous People!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/indigenous_640.jpg`;
  educationDay.setAttribute("alt", `indigenous`);
}
if ((`${month}` === `August`) & (`${day}` === `12`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Youth Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/youth_640.jpg`;
  educationDay.setAttribute("alt", `youth`);
}

if ((`${month}` === `September`) & (`${day}` === `16`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day for the Preservation of the Ozone Layer!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/ozone_640.jpg`;
  educationDay.setAttribute("alt", `ozone`);
}
if ((`${month}` === `September`) & (`${day}` === `21`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Peace!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/peace_640.jpg`;
  educationDay.setAttribute("alt", `peace`);
}
if ((`${month}` === `October`) & (`${day}` === `2`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Day for Farmed Animals!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/farm_640.jpg`;
  educationDay.setAttribute("alt", `farm animals`);
}

if ((`${month}` === `October`) & (`${day}` === `3`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Habitat Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/habitat_640.jpg`;
  educationDay.setAttribute("alt", `habitat`);
}
if ((`${month}` === `October`) & (`${day}` === `4`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Animal Welfare Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/welfare_640.jpg`;
  educationDay.setAttribute("alt", `animal welfare`);
}
if ((`${month}` === `October`) & (`${day}` === `12`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Migratory Bird Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/migration-bird_640.jpg`;
  educationDay.setAttribute("alt", `migrating bird`);
}
if ((`${month}` === `October`) & (`${day}` === `13`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day for Natural Disaster Reduction!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/disaster_640.jpg`;
  educationDay.setAttribute("alt", `natural disaster`);
}
if ((`${month}` === `October`) & (`${day}` === `16`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "World Food Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/food_640.jpg`;
  educationDay.setAttribute("alt", `food`);
}
if ((`${month}` === `November`) & (`${day}` === `6`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML =
    "International Day for Preventing the Exploitation of the Environment in War and Armed Conflict!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/war_640.jpg`;
  educationDay.setAttribute("alt", `war`);
}
if ((`${month}` === `December`) & (`${day}` === `5`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Volunteer Day!! World Soil Day!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/soil_640.jpg`;
  educationDay.setAttribute("alt", `soil`);
}
if ((`${month}` === `December`) & (`${day}` === `10`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "Human Rights Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/huma-rights.png`;
  educationDay.setAttribute("alt", `human rights`);
}
if ((`${month}` === `December`) & (`${day}` === `11`)) {
  let natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Mountain Day!!!";
  let educationDay = document.querySelector("#natureIcon");
  educationDay.src = `/media/mountain_640.jpg`;
  educationDay.setAttribute("alt", `mountain`);
}

function showWeather(response) {
  //local
  let local = response.data.name;
  let city = document.querySelector("#location");
  city.innerHTML = `${local}`;

  //description
  let description = response.data.weather[0].description;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = `${description}`;

  //weatherIcon
  let weatherIcon = response.data.weather[0].icon;
  let weatherIconplace = document.querySelector("#weatherIcon");
  weatherIconplace.setAttribute("src", `/media/icons/${weatherIcon}.png`);
  weatherIconplace.setAttribute("alt", `${description}`);

  //temperature - physics
  let celsius = response.data.main.temp;
  let celsiusRound = Math.round(`${celsius}`);
  let tempValueC = document.querySelector("#temp-value");
  tempValueC.innerHTML = `${celsiusRound}ºC`;
  let fahrenheit = Math.round((`${celsius}` * 9) / 5 + 32);

  function showC(event) {
    event.preventDefault();
    let tempValueC = document.querySelector("#temp-value");
    tempValueC.innerHTML = `${celsiusRound}ºC`;
  }
  function showF(event) {
    event.preventDefault();
    let tempValueF = document.querySelector("#temp-value");
    tempValueF.innerHTML = `${fahrenheit}ºF`;
  }

  let celsiusButton = document.querySelector("#C-converter");
  celsiusButton.addEventListener("click", showC);

  let fahrenheitButton = document.querySelector("#F-converter");
  fahrenheitButton.addEventListener("click", showF);

  //temperature - perception
  let celsiusF = response.data.main.feels_like;
  let celsiusFRound = Math.round(`${celsiusF}`);
  let tempValueCF = document.querySelector("#feelTemp-value");
  tempValueCF.innerHTML = `${celsiusFRound}ºC`;
  let fahrenheitF = Math.round((`${celsiusF}` * 9) / 5 + 32);
  function showCF(event) {
    event.preventDefault();
    let tempValueCF = document.querySelector("#feelTemp-value");
    tempValueCF.innerHTML = `${celsiusFRound}ºC`;
  }
  function showFF(event) {
    event.preventDefault();
    let tempValueFF = document.querySelector("#feelTemp-value");
    tempValueFF.innerHTML = `${fahrenheitF}ºF`;
  }

  let celsiusFButton = document.querySelector("#C-converter");
  celsiusFButton.addEventListener("click", showCF);

  let fahrenheitFButton = document.querySelector("#F-converter");
  fahrenheitFButton.addEventListener("click", showFF);

  //humidity
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
}

function showForecast(response) {
  let forecastIcon1 = response.data.list[0].weather[0].icon;
  let forecastDay1img = document.querySelector("#forecast1");
  forecastDay1img.setAttribute("src", `/media/icons/${forecastIcon1}.png`);
  let forecastIcon2 = response.data.list[8].weather[0].icon;
  let forecastDay2img = document.querySelector("#forecast2");
  forecastDay2img.setAttribute("src", `/media/icons/${forecastIcon2}.png`);
  let forecastIcon3 = response.data.list[16].weather[0].icon;
  let forecastDay3img = document.querySelector("#forecast3");
  forecastDay3img.setAttribute("src", `/media/icons/${forecastIcon3}.png`);
  let forecastIcon4 = response.data.list[24].weather[0].icon;
  let forecastDay4img = document.querySelector("#forecast4");
  forecastDay4img.setAttribute("src", `/media/icons/${forecastIcon4}.png`);
  let forecastIcon5 = response.data.list[32].weather[0].icon;
  let forecastDay5img = document.querySelector("#forecast5");
  forecastDay5img.setAttribute("src", `/media/icons/${forecastIcon5}.png`);
}

function citySearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#inlineFormInputGroup");
  searchCity.value = searchCity.value.trim();
  searchCity.value = searchCity.value.toUpperCase();
  searchCity.value = searchCity.value.toLowerCase();
  let apiWeatherKey = "c55a735461d1622ed3b65499c272f01c";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${apiWeatherKey}&units=metric`;
  axios.get(`${weatherUrl}`).then(showWeather);
  if (searchCity.value === "") {
    alert("Please type a city");
    location.reload();
  }
  apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${searchCity.value}&appid=${apiWeatherKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showForecast);
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
