// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/script.js":[function(require,module,exports) {
var now = new Date();
console.log(now);
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekDay = weekDays[now.getDay()];
var day = now.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[now.getMonth()];
var year = now.getFullYear();
var timeHours = now.getHours();
var timeMinutes = now.getMinutes();

if (timeHours < 10) {
  timeHours = "0" + now.getHours();
}

if (timeMinutes < 10) {
  timeMinutes = "0" + now.getMinutes();
} //display date


var date = document.querySelector("#current-date");
date.innerHTML = "".concat(weekDay, ", ").concat(day, " ").concat(month, " ").concat(year, " ").concat(timeHours, ":").concat(timeMinutes); //display days of week for forecast

var forecastdayToday = weekDay.substring(0, 3);
var forecastday = document.querySelector("#today");
forecastday.innerHTML = "".concat(forecastdayToday);
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var forecastDay1 = document.querySelector("#tomorrow");
forecastDay1.innerHTML = "".concat(tomorrow).substring(0, 3);
var secondDay = new Date();
secondDay.setDate(secondDay.getDate() + 2);
var forecastDay2 = document.querySelector("#second-day");
forecastDay2.innerHTML = "".concat(secondDay).substring(0, 3);
var thirdDay = new Date();
thirdDay.setDate(thirdDay.getDate() + 3);
var forecastDay3 = document.querySelector("#third-day");
forecastDay3.innerHTML = "".concat(thirdDay).substring(0, 3);
var forthDay = new Date();
forthDay.setDate(forthDay.getDate() + 4);
var forecastDay4 = document.querySelector("#forth-day");
forecastDay4.innerHTML = "".concat(forthDay).substring(0, 3); //Holidays of Nature - transform in an array and call it (in progress)

if ("".concat(month) === "January" & "".concat(day) === "26") {
  var natureHoliday = document.querySelector("p");
  natureHoliday.innerHTML = "International Day of Education!!";
  var educationDay = document.querySelector("#natureIcon");
  educationDay.src = "/media/education_640.jpg";
  educationDay.setAttribute("alt", "education");
}

if ("".concat(month) === "January" & "".concat(day) === "31") {
  var _natureHoliday = document.querySelector("p");

  _natureHoliday.innerHTML = "International Zebra Day!!!";

  var _educationDay = document.querySelector("#natureIcon");

  _educationDay.src = "/media/zebra_640.jpg";

  _educationDay.setAttribute("alt", "zebra");
}

if ("".concat(month) === "February" & "".concat(day) === "2") {
  var _natureHoliday2 = document.querySelector("p");

  _natureHoliday2.innerHTML = "World Wetlands Day!!";

  var _educationDay2 = document.querySelector("#natureIcon");

  _educationDay2.src = "/media/wetlands_640.jpg";

  _educationDay2.setAttribute("alt", "wetland");
}

if ("".concat(month) === "February" & "".concat(day) === "15") {
  var _natureHoliday3 = document.querySelector("p");

  _natureHoliday3.innerHTML = "World Hippopotamus Day!!!";

  var _educationDay3 = document.querySelector("#natureIcon");

  _educationDay3.src = "/media/hippo_640.jpg";

  _educationDay3.setAttribute("alt", "hippo");
}

if ("".concat(month) === "February" & "".concat(day) === "27") {
  var _natureHoliday4 = document.querySelector("p");

  _natureHoliday4.innerHTML = "International Polar Bear Day!!!";

  var _educationDay4 = document.querySelector("#natureIcon");

  _educationDay4.src = "/media/polar-bear_640.jpg";

  _educationDay4.setAttribute("alt", "polar bear");
}

if ("".concat(month) === "March" & "".concat(day) === "1") {
  var _natureHoliday5 = document.querySelector("p");

  _natureHoliday5.innerHTML = "International Day of Action for Rivers!!";

  var _educationDay5 = document.querySelector("#natureIcon");

  _educationDay5.src = "/media/river_640.jpg";

  _educationDay5.setAttribute("alt", "river");
}

if ("".concat(month) === "March" & "".concat(day) === "3") {
  var _natureHoliday6 = document.querySelector("p");

  _natureHoliday6.innerHTML = "World Wildlife Day!!";

  var _educationDay6 = document.querySelector("#natureIcon");

  _educationDay6.src = "/media/wildlife_640.jpg";

  _educationDay6.setAttribute("alt", "wildlife");
}

if ("".concat(month) === "March" & "".concat(day) === "18") {
  var _natureHoliday7 = document.querySelector("p");

  _natureHoliday7.innerHTML = "Global Recycling Day!!";

  var _educationDay7 = document.querySelector("#natureIcon");

  _educationDay7.src = "/media/recycle_640.jpg";

  _educationDay7.setAttribute("alt", "recycle");
}

if ("".concat(month) === "March" & "".concat(day) === "20") {
  var _natureHoliday8 = document.querySelector("p");

  _natureHoliday8.innerHTML = "World Frog Day!!!";

  var _educationDay8 = document.querySelector("#natureIcon");

  _educationDay8.src = "/media/frog_640.jpg";

  _educationDay8.setAttribute("alt", "frog");
}

if ("".concat(month) === "March" & "".concat(day) === "21") {
  var _natureHoliday9 = document.querySelector("p");

  _natureHoliday9.innerHTML = "International Day of Forests!! and World Planting Day!!";

  var _educationDay9 = document.querySelector("#natureIcon");

  _educationDay9.src = "/media/planting_640.jpg";

  _educationDay9.setAttribute("alt", "planting");
}

if ("".concat(month) === "March" & "".concat(day) === "22") {
  var _natureHoliday10 = document.querySelector("p");

  _natureHoliday10.innerHTML = "World Water Day!!";

  var _educationDay10 = document.querySelector("#natureIcon");

  _educationDay10.src = "/media/drop_640.jpg";

  _educationDay10.setAttribute("alt", "water");
}

if ("".concat(month) === "March" & "".concat(day) === "23") {
  var _natureHoliday11 = document.querySelector("p");

  _natureHoliday11.innerHTML = "World Meteorological Day!!";

  var _educationDay11 = document.querySelector("#natureIcon");

  _educationDay11.src = "/media/meteo_640.jpg";

  _educationDay11.setAttribute("alt", "meteoreology");
}

if ("".concat(month) === "April" & "".concat(day) === "7") {
  var _natureHoliday12 = document.querySelector("p");

  _natureHoliday12.innerHTML = "World Health Day!!";

  var _educationDay12 = document.querySelector("#natureIcon");

  _educationDay12.src = "/media/health_640.jpg";

  _educationDay12.setAttribute("alt", "health");
}

if ("".concat(month) === "April" & "".concat(day) === "10") {
  var _natureHoliday13 = document.querySelector("p");

  _natureHoliday13.innerHTML = "Arbor Day!!";

  var _educationDay13 = document.querySelector("#natureIcon");

  _educationDay13.src = "/media/tree_640.jpg";

  _educationDay13.setAttribute("alt", "arboring");
}

if ("".concat(month) === "April" & "".concat(day) === "18") {
  var _natureHoliday14 = document.querySelector("p");

  _natureHoliday14.innerHTML = "World Heritage Day!!";

  var _educationDay14 = document.querySelector("#natureIcon");

  _educationDay14.src = "/media/heritage_640.jpg";

  _educationDay14.setAttribute("alt", "heritage");
}

if ("".concat(month) === "April" & "".concat(day) === "22") {
  var _natureHoliday15 = document.querySelector("p");

  _natureHoliday15.innerHTML = "Earth Day!!";

  var _educationDay15 = document.querySelector("#natureIcon");

  _educationDay15.src = "/media/earth_640.jpg";

  _educationDay15.setAttribute("alt", "earth");
}

if ("".concat(month) === "May" & "".concat(day) === "16") {
  var _natureHoliday16 = document.querySelector("p");

  _natureHoliday16.innerHTML = "World Fish Migration Day!!";

  var _educationDay16 = document.querySelector("#natureIcon");

  _educationDay16.src = "/media/fish_640.jpg";

  _educationDay16.setAttribute("alt", "migrating fish");
}

if ("".concat(month) === "May" & "".concat(day) === "20") {
  var _natureHoliday17 = document.querySelector("p");

  _natureHoliday17.innerHTML = "World Bee Day!!!";

  var _educationDay17 = document.querySelector("#natureIcon");

  _educationDay17.src = "/media/bee_640.jpg";

  _educationDay17.setAttribute("alt", "bee");
}

if ("".concat(month) === "May" & "".concat(day) === "22") {
  var _natureHoliday18 = document.querySelector("p");

  _natureHoliday18.innerHTML = "International Day for Biological Diversity!!";

  var _educationDay18 = document.querySelector("#natureIcon");

  _educationDay18.src = "/media/biodiversity_640.jpg";

  _educationDay18.setAttribute("alt", "biodiversity");
}

if ("".concat(month) === "May" & "".concat(day) === "23") {
  var _natureHoliday19 = document.querySelector("p");

  _natureHoliday19.innerHTML = "World Turtle Day!!!";

  var _educationDay19 = document.querySelector("#natureIcon");

  _educationDay19.src = "/media/turtle_640.jpg";

  _educationDay19.setAttribute("alt", "turtle");
}

if ("".concat(month) === "June" & "".concat(day) === "5") {
  var _natureHoliday20 = document.querySelector("p");

  _natureHoliday20.innerHTML = "World Environment Day!!";

  var _educationDay20 = document.querySelector("#natureIcon");

  _educationDay20.src = "/media/environment_640.jpg";

  _educationDay20.setAttribute("alt", "environment");
}

if ("".concat(month) === "June" & "".concat(day) === "8") {
  var _natureHoliday21 = document.querySelector("p");

  _natureHoliday21.innerHTML = "World Oceans Day!!";

  var _educationDay21 = document.querySelector("#natureIcon");

  _educationDay21.src = "/media/ocean_640.jpg";

  _educationDay21.setAttribute("alt", "ocean");
}

if ("".concat(month) === "June" & "".concat(day) === "17") {
  var _natureHoliday22 = document.querySelector("p");

  _natureHoliday22.innerHTML = "World Day to Combat Desertification!!";

  var _educationDay22 = document.querySelector("#natureIcon");

  _educationDay22.src = "/media/desertification_640.jpg";

  _educationDay22.setAttribute("alt", "desertification");
}

if ("".concat(month) === "June" & "".concat(day) === "22") {
  var _natureHoliday23 = document.querySelector("p");

  _natureHoliday23.innerHTML = "World Rainforest Day!!";

  var _educationDay23 = document.querySelector("#natureIcon");

  _educationDay23.src = "/media/rainforest_640.jpg";

  _educationDay23.setAttribute("alt", "rainforest");
}

if ("".concat(month) === "June" & "".concat(day) === "29") {
  var _natureHoliday24 = document.querySelector("p");

  _natureHoliday24.innerHTML = "International Day of the Tropics!!";

  var _educationDay24 = document.querySelector("#natureIcon");

  _educationDay24.src = "/media/tropics_640.jpg";

  _educationDay24.setAttribute("alt", "tropics");
}

if ("".concat(month) === "July" & "".concat(day) === "11") {
  var _natureHoliday25 = document.querySelector("p");

  _natureHoliday25.innerHTML = "World Population Day!!";

  var _educationDay25 = document.querySelector("#natureIcon");

  _educationDay25.src = "/media/population_640.jpg";

  _educationDay25.setAttribute("alt", "population");
}

if ("".concat(month) === "August" & "".concat(day) === "9") {
  var _natureHoliday26 = document.querySelector("p");

  _natureHoliday26.innerHTML = "International Day of the World's Indigenous People!!";

  var _educationDay26 = document.querySelector("#natureIcon");

  _educationDay26.src = "/media/indigenous_640.jpg";

  _educationDay26.setAttribute("alt", "indigenous");
}

if ("".concat(month) === "August" & "".concat(day) === "12") {
  var _natureHoliday27 = document.querySelector("p");

  _natureHoliday27.innerHTML = "International Youth Day!!";

  var _educationDay27 = document.querySelector("#natureIcon");

  _educationDay27.src = "/media/youth_640.jpg";

  _educationDay27.setAttribute("alt", "youth");
}

if ("".concat(month) === "September" & "".concat(day) === "16") {
  var _natureHoliday28 = document.querySelector("p");

  _natureHoliday28.innerHTML = "International Day for the Preservation of the Ozone Layer!!";

  var _educationDay28 = document.querySelector("#natureIcon");

  _educationDay28.src = "/media/ozone_640.jpg";

  _educationDay28.setAttribute("alt", "ozone");
}

if ("".concat(month) === "September" & "".concat(day) === "21") {
  var _natureHoliday29 = document.querySelector("p");

  _natureHoliday29.innerHTML = "International Day of Peace!!";

  var _educationDay29 = document.querySelector("#natureIcon");

  _educationDay29.src = "/media/peace_640.jpg";

  _educationDay29.setAttribute("alt", "peace");
}

if ("".concat(month) === "October" & "".concat(day) === "2") {
  var _natureHoliday30 = document.querySelector("p");

  _natureHoliday30.innerHTML = "World Day for Farmed Animals!!!";

  var _educationDay30 = document.querySelector("#natureIcon");

  _educationDay30.src = "/media/farm_640.jpg";

  _educationDay30.setAttribute("alt", "farm animals");
}

if ("".concat(month) === "October" & "".concat(day) === "3") {
  var _natureHoliday31 = document.querySelector("p");

  _natureHoliday31.innerHTML = "World Habitat Day!!";

  var _educationDay31 = document.querySelector("#natureIcon");

  _educationDay31.src = "/media/habitat_640.jpg";

  _educationDay31.setAttribute("alt", "habitat");
}

if ("".concat(month) === "October" & "".concat(day) === "4") {
  var _natureHoliday32 = document.querySelector("p");

  _natureHoliday32.innerHTML = "World Animal Welfare Day!!";

  var _educationDay32 = document.querySelector("#natureIcon");

  _educationDay32.src = "/media/welfare_640.jpg";

  _educationDay32.setAttribute("alt", "animal welfare");
}

if ("".concat(month) === "October" & "".concat(day) === "12") {
  var _natureHoliday33 = document.querySelector("p");

  _natureHoliday33.innerHTML = "World Migratory Bird Day!!!";

  var _educationDay33 = document.querySelector("#natureIcon");

  _educationDay33.src = "/media/migration-bird_640.jpg";

  _educationDay33.setAttribute("alt", "migrating bird");
}

if ("".concat(month) === "October" & "".concat(day) === "13") {
  var _natureHoliday34 = document.querySelector("p");

  _natureHoliday34.innerHTML = "International Day for Natural Disaster Reduction!!!";

  var _educationDay34 = document.querySelector("#natureIcon");

  _educationDay34.src = "/media/disaster_640.jpg";

  _educationDay34.setAttribute("alt", "natural disaster");
}

if ("".concat(month) === "October" & "".concat(day) === "16") {
  var _natureHoliday35 = document.querySelector("p");

  _natureHoliday35.innerHTML = "World Food Day!!";

  var _educationDay35 = document.querySelector("#natureIcon");

  _educationDay35.src = "/media/food_640.jpg";

  _educationDay35.setAttribute("alt", "food");
}

if ("".concat(month) === "November" & "".concat(day) === "6") {
  var _natureHoliday36 = document.querySelector("p");

  _natureHoliday36.innerHTML = "International Day for Preventing the Exploitation of the Environment in War and Armed Conflict!!";

  var _educationDay36 = document.querySelector("#natureIcon");

  _educationDay36.src = "/media/war_640.jpg";

  _educationDay36.setAttribute("alt", "war");
}

if ("".concat(month) === "December" & "".concat(day) === "5") {
  var _natureHoliday37 = document.querySelector("p");

  _natureHoliday37.innerHTML = "International Volunteer Day!! World Soil Day!!";

  var _educationDay37 = document.querySelector("#natureIcon");

  _educationDay37.src = "/media/soil_640.jpg";

  _educationDay37.setAttribute("alt", "soil");
}

if ("".concat(month) === "December" & "".concat(day) === "10") {
  var _natureHoliday38 = document.querySelector("p");

  _natureHoliday38.innerHTML = "Human Rights Day!!!";

  var _educationDay38 = document.querySelector("#natureIcon");

  _educationDay38.src = "/media/huma-rights.png";

  _educationDay38.setAttribute("alt", "human rights");
}

if ("".concat(month) === "December" & "".concat(day) === "11") {
  var _natureHoliday39 = document.querySelector("p");

  _natureHoliday39.innerHTML = "International Mountain Day!!!";

  var _educationDay39 = document.querySelector("#natureIcon");

  _educationDay39.src = "/media/mountain_640.jpg";

  _educationDay39.setAttribute("alt", "mountain");
}

function showWeather(response) {
  //local
  var local = response.data.name;
  var city = document.querySelector("#location");
  city.innerHTML = "".concat(local); //description

  var description = response.data.weather[0].description;
  var weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = "".concat(description); //weatherIcon

  var weatherIcon = response.data.weather[0].icon;
  var weatherIconplace = document.querySelector("#weatherIcon");
  weatherIconplace.setAttribute("src", "/media/icons/".concat(weatherIcon, ".png"));
  weatherIconplace.setAttribute("alt", "".concat(description)); //temperature - physics

  var celsius = response.data.main.temp;
  var celsiusRound = Math.round("".concat(celsius));
  var tempValueC = document.querySelector("#temp-value");
  tempValueC.innerHTML = "".concat(celsiusRound, "\xBAC");
  var fahrenheit = Math.round("".concat(celsius) * 9 / 5 + 32);

  function showC(event) {
    event.preventDefault();
    var tempValueC = document.querySelector("#temp-value");
    tempValueC.innerHTML = "".concat(celsiusRound, "\xBAC");
  }

  function showF(event) {
    event.preventDefault();
    var tempValueF = document.querySelector("#temp-value");
    tempValueF.innerHTML = "".concat(fahrenheit, "\xBAF");
  }

  var celsiusButton = document.querySelector("#C-converter");
  celsiusButton.addEventListener("click", showC);
  var fahrenheitButton = document.querySelector("#F-converter");
  fahrenheitButton.addEventListener("click", showF); //temperature - perception/Feeling

  var celsiusF = response.data.main.feels_like;
  var celsiusFRound = Math.round("".concat(celsiusF));
  var tempValueCF = document.querySelector("#feelTemp-value");
  tempValueCF.innerHTML = "".concat(celsiusFRound, "\xBAC");
  var fahrenheitF = Math.round("".concat(celsiusF) * 9 / 5 + 32);

  function showCF(event) {
    event.preventDefault();
    var tempValueCF = document.querySelector("#feelTemp-value");
    tempValueCF.innerHTML = "".concat(celsiusFRound, "\xBAC");
  }

  function showFF(event) {
    event.preventDefault();
    var tempValueFF = document.querySelector("#feelTemp-value");
    tempValueFF.innerHTML = "".concat(fahrenheitF, "\xBAF");
  }

  var celsiusFButton = document.querySelector("#C-converter");
  celsiusFButton.addEventListener("click", showCF);
  var fahrenheitFButton = document.querySelector("#F-converter");
  fahrenheitFButton.addEventListener("click", showFF); //humidity

  var humidity = response.data.main.humidity;
  var humidValue = document.querySelector("#humid-value");
  humidValue.innerHTML = "".concat(humidity, "%"); ///wind

  var windSpeed = response.data.wind.speed;
  var windDegrees = response.data.wind.deg;

  if (windDegrees === "0" | windDegrees === "360") {
    windDegrees = "N";
  }

  if (windDegrees > "0" & windDegrees < "90") {
    windDegrees = "NE";
  }

  if (windDegrees === "90") {
    windDegrees = "E";
  }

  if (windDegrees > "90" & windDegrees < "180") {
    windDegrees = "SE";
  }

  if (windDegrees === "180") {
    windDegrees = "S";
  }

  if (windDegrees > "180" & windDegrees < "270") {
    windDegrees = "SW";
  }

  if (windDegrees === "270") {
    windDegrees = "W";
  }

  if (windDegrees > "270" & windDegrees < "360") {
    windDegrees = "NW";
  }

  var windValues = document.querySelector("#wind-values");
  windValues.innerHTML = "\n".concat(windSpeed, "m/s\n").concat(windDegrees);
}

function showForecast(response) {
  var forecastIcon1 = response.data.list[0].weather[0].icon;
  var forecastDay1img = document.querySelector("#forecast1");
  forecastDay1img.setAttribute("src", "/media/icons/".concat(forecastIcon1, ".png"));
  var forecastIcon2 = response.data.list[8].weather[0].icon;
  var forecastDay2img = document.querySelector("#forecast2");
  forecastDay2img.setAttribute("src", "/media/icons/".concat(forecastIcon2, ".png"));
  var forecastIcon3 = response.data.list[16].weather[0].icon;
  var forecastDay3img = document.querySelector("#forecast3");
  forecastDay3img.setAttribute("src", "/media/icons/".concat(forecastIcon3, ".png"));
  var forecastIcon4 = response.data.list[24].weather[0].icon;
  var forecastDay4img = document.querySelector("#forecast4");
  forecastDay4img.setAttribute("src", "/media/icons/".concat(forecastIcon4, ".png"));
  var forecastIcon5 = response.data.list[32].weather[0].icon;
  var forecastDay5img = document.querySelector("#forecast5");
  forecastDay5img.setAttribute("src", "/media/icons/".concat(forecastIcon5, ".png"));
}

function citySearch(event) {
  event.preventDefault();
  var searchCity = document.querySelector("#inlineFormInputGroup");
  searchCity.value = searchCity.value.trim();
  searchCity.value = searchCity.value.toUpperCase();
  searchCity.value = searchCity.value.toLowerCase();
  var apiWeatherKey = "c55a735461d1622ed3b65499c272f01c";
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(searchCity.value, "&appid=").concat(apiWeatherKey, "&units=metric");
  axios.get("".concat(weatherUrl)).then(showWeather);

  if (searchCity.value === "") {
    alert("Please type a city");
    location.reload();
  }

  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(searchCity.value, "&appid=").concat(apiWeatherKey, "&units=metric");
  axios.get("".concat(apiUrl)).then(showForecast);
}

var cityForm = document.querySelector("form");
cityForm.addEventListener("submit", citySearch);

function localWeather(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var urlPosition = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=c55a735461d1622ed3b65499c272f01c&units=metric");
  axios.get("".concat(urlPosition)).then(showWeather);
  var urlPositionForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lon, "&appid=c55a735461d1622ed3b65499c272f01c&units=metric");
  axios.get("".concat(urlPositionForecast)).then(showForecast);
}

function retrieveLocal(position) {
  navigator.geolocation.getCurrentPosition(localWeather);
}

var localpositionButton = document.querySelector("#current-location");
localpositionButton.addEventListener("click", retrieveLocal);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50613" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/script.js"], null)
//# sourceMappingURL=/script.baf0e655.js.map