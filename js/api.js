import { renderWeatherCard } from './card.js'


const API_KEY = "d67a906df3f7b73e26ea640be6c92395"; // 👈 請替換成你註冊的 key
  
export async function fetchWeather(city) {
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