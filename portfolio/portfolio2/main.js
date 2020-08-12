function getWeather(cityName) {
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d1b765aec40a47ec6518b30670628ad5&units=metric`

  axios.get(api)
    .then(function (response) {

      document.querySelector(".temperature__value p").innerText = parseInt(`${response.data.main.temp}`) + '°C';
      document.querySelector(".temperature__description p").innerText = `${response.data.weather[0].description}`;
      document.querySelector(".location p").innerText = `${response.data.name}, ${response.data.sys.country}`
      document.querySelector(".weather__icon").innerHTML = `<img src="icons/${response.data.weather[0].icon}.png"/>`
    })
    .catch(function (err) {
      console.log(err);
    })
}

window.onload = function () {
  document.querySelector(".weather__btn").onclick = function (e) {
    e.preventDefault();
    let cityName = document.querySelector(".weather__input").value;
    getWeather(cityName);
    document.querySelector(".weather__input").value = '';
  }
}