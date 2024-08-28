const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2a26f42c71msh3f6dd6bf066b65ep137f81jsndf55e4bba1d3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeatherOther1 = (OtherCity1) => {
  OtherCity1.innerHTML = OtherCity1;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      OtherCity1,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // cloc1.innerHTML = response.cloud_pct
      toc1.innerHTML = response.temp;
      floc1.innerHTML = response.feels_like;
      hoc1.innerHTML = response.humidity;
      mitoc1.innerHTML = response.min_temp;
      matoc1.innerHTML = response.max_temp;
      wsoc1.innerHTML = response.wind_speed;
      // wdoc1.innerHTML = response.wind_degrees
    })
    .catch((err) => console.error(err));
};
const getWeatherOther2 = (OtherCity2) => {
  OtherCity2.innerHTML = OtherCity2;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      OtherCity2,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // cloc2.innerHTML = response.cloud_pct
      toc2.innerHTML = response.temp;
      floc2.innerHTML = response.feels_like;
      hoc2.innerHTML = response.humidity;
      mitoc2.innerHTML = response.min_temp;
      matoc2.innerHTML = response.max_temp;
      wsoc2.innerHTML = response.wind_speed;
      // wdoc2.innerHTML = response.wind_degrees
    })
    .catch((err) => console.error(err));
};
const getWeatherOther3 = (OtherCity3) => {
  OtherCity3.innerHTML = OtherCity3;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      OtherCity3,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // cloc3.innerHTML = response.cloud_pct
      toc3.innerHTML = response.temp;
      floc3.innerHTML = response.feels_like;
      hoc3.innerHTML = response.humidity;
      mitoc3.innerHTML = response.min_temp;
      matoc3.innerHTML = response.max_temp;
      wsoc3.innerHTML = response.wind_speed;
      // wdoc3.innerHTML = response.wind_degrees
    })
    .catch((err) => console.error(err));
};
const getWeatherOther4 = (OtherCity4) => {
  OtherCity4.innerHTML = OtherCity4;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      OtherCity4,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // cloc4.innerHTML = response.cloud_pct
      toc4.innerHTML = response.temp;
      floc4.innerHTML = response.feels_like;
      hoc4.innerHTML = response.humidity;
      mitoc4.innerHTML = response.min_temp;
      matoc4.innerHTML = response.max_temp;
      wsoc4.innerHTML = response.wind_speed;
      // wdoc4.innerHTML = response.wind_degrees
    })
    .catch((err) => console.error(err));
};

getWeatherOther1("Bangalore");
getWeatherOther2("Ahmedabad");
getWeatherOther3("Kolkata");
getWeatherOther4("Lucknow");

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct1.innerHTML = response.cloud_pct;
      cloud_pct2.innerHTML = response.cloud_pct;
      temp2.innerHTML = response.temp;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      // sunrise.innerHTML= response.sunrise
      // sunset.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault(); //-->It will not reload the page to Delhi again when we give some other city
  getWeather(city.value);
});

getWeather("Delhi");
