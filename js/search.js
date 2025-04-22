import { fetchWeather } from './api.js'
import { addCity,hasCity } from './store.js';


const renderedCities = new Set()


export function initSearch() {
    const searchInput = document.querySelector('#searchInput')
    const suggestionList = document.querySelector('#suggestionList')


    searchInput.addEventListener('input', function () {
        const keyword = searchInput.value.toLowerCase().trim()

        suggestionList.innerHTML = ''

        if (keyword == "") return

        console.log(keyword)


        let li = document.createElement('li')
        li.textContent = keyword

        suggestionList.appendChild(li)

        // 點選提示後觸發 API
        li.addEventListener("click", () => {
            searchInput.value = keyword;
            suggestionList.innerHTML = "";

            if (hasCity(keyword)) {

                console.log('Its allready heve it !!')
                return
            }
            // 這裡可以呼叫 API
            fetchWeather(keyword); // 呼叫這裡 建立小卡片


            addCity(keyword)
           
        });
    })
}
