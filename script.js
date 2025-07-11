function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "87bd7a8779aea5e3a71eed47585b3aff"; // Replace this

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡 Temp: ${data.main.temp}°C</p>
          <p>☁ Condition: ${data.weather[0].main}</p>
        `;
      } else {
        document.getElementById("result").innerHTML = "City not found!";
      }
    })
    .catch((err) => {
      document.getElementById("result").innerHTML = "Error fetching data!";
    });
}
