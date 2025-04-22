const cities = [
    "Taipei", "Tokyo", "Toronto", "New York", "London",
    "Paris", "Beijing", "Seoul", "Singapore", "Sydney"
];


const searchInput = document.querySelector('#searchInput')
const suggestionList = document.querySelector('#suggestionList')


searchInput.addEventListener('input', function () {
    const keyword = searchInput.value.toLowerCase().trim()

    suggestionList.innerHTML = ''

    if (keyword == "") return

    let matchedCities = cities.filter(city =>
        city.toLowerCase().includes(keyword)
        // city.toLowerCase() == keyword
    )

    matchedCities.forEach(city => {
        let li = document.createElement('li')
        li.textContent = city

        suggestionList.appendChild(li)

        // 點選提示後觸發 API
        li.addEventListener("click", () => {
            searchInput.value = city;
            suggestionList.innerHTML = "";
            fetchWeather(city); // 呼叫這裡
        });
    })

})


const weatherContainer = document.getElementById("weatherContainer");
const API_KEY = "d67a906df3f7b73e26ea640be6c92395"; // 👈 請替換成你註冊的 key


async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`找不到城市：${city}`);

        const data = await response.json();
        renderWeatherCard(data);
        console.log(data);

    }
    catch (err) {
        console.log(err.message);
    }

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


