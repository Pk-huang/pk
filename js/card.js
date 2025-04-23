import { removeCity ,getCurrentUnit } from './store.js';


const weatherContainer = document.getElementById("weatherContainer");

export function renderWeatherCard(data ,onDelete) {
    const card = document.createElement("div");
    card.className = "weather-card";

    const city = data.name;
    const temp = data.main.temp.toFixed(1);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const tempC = data.main.temp;


    card.innerHTML = `
    <div class="info" data-temp=${tempC}>
      <strong>${city}</strong>
      <span>${description}</span>
      <span class="temp-value">${temp}°C</span>
    </div>
    <img src="${iconUrl}" alt="${description}" />
    <button class="delete-btn">✖</button>
  `;
    
    card.querySelector('.delete-btn').addEventListener('click', () => {
        weatherContainer.removeChild(card)
        removeCity(city.trim().toLowerCase())
        if (typeof onDelete === 'function') {
          onDelete(city.trim().toLowerCase());
        }
    })
    weatherContainer.appendChild(card);
}



export function updateAllTemperatures() {
  let cardTemp = document.querySelectorAll(' #weatherContainer .info')

  cardTemp.forEach(info => {
      let tempValue = info.querySelector('.temp-value')
      let tempC = parseFloat(info.dataset.temp) 
      console.log(typeof tempC)
      tempValue.textContent = unitChange(tempC)
  });
}

export function unitChange(tempC) {
  let currentUnit = getCurrentUnit();
  return currentUnit == "C" ? `${tempC.toFixed(1)}°C` : `${(tempC * 1.8 + 32).toFixed(1)}°F`;
}