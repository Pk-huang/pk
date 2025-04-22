import { removeCity } from './store.js';
const weatherContainer = document.getElementById("weatherContainer");

export function renderWeatherCard(data) {
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
    <button class="delete-btn">✖</button>
  `;
    
    card.querySelector('.delete-btn').addEventListener('click', () => {
        weatherContainer.removeChild(card)
        removeCity(city.trim().toLowerCase())
    })
    weatherContainer.appendChild(card);
}


