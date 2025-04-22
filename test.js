const weatherContainer = document.getElementById("weatherContainer");
const API_KEY = "你的 API Key"; // 👈 請替換成你註冊的 key

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("找不到城市");
      return response.json();
    })
    .then(data => {
      renderWeatherCard(data);
    })
    .catch(err => {
      alert(err.message);
    });
}

function renderWeatherCard(data) {
  const card = document.createElement("div");
  card.className = "weather-card";

  const city = data.name;
  const temp = data.main.temp.toFixed(1);
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  card.innerHTML = `
    <div class="info">
      <strong>${city}</strong>
      <span>${description}</span>
      <span>${temp}°C</span>
    </div>
    <img src="${iconUrl}" alt="${description}" />
  `;

  weatherContainer.appendChild(card);
}

// 點選提示後觸發 API
li.addEventListener("click", () => {
  searchInput.value = city;
  suggestionList.innerHTML = "";
  fetchWeather(city); // 呼叫這裡
});
