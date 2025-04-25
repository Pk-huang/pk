import { fetchWeatherByCoords } from './api.js';

export function initGeoButton() {
    const geoBtn = document.querySelector('#geoBtn')

    geoBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            console.log("不支援定位")
            return
        }


        geoBtn.disabled = true
        geoBtn.textContent = "定位中...";

        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                fetchWeatherByCoords(latitude, longitude);

                geoBtn.textContent = "顯示我目前位置的天氣";
                geoBtn.disabled = false;
            },
            error=>{
                console.log("定位失敗：" + error.message);
                geoBtn.textContent = "顯示我目前位置的天氣";
                geoBtn.disabled = false;
            }
        )

    })

}