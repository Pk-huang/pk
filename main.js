import { initSearch } from './js/search.js'
import { readStorage } from './js/store.js'
import { fetchWeather } from './js/api.js'
import { initGeoButton } from './js/geo.js';

initGeoButton();

initSearch() 
document.querySelector('#restoreBtn').addEventListener('click',()=>{
    let save =  readStorage()

    if(save== 0){
        console.log('loaclStorage is empty')
    }

    save.forEach(city => {
        fetchWeather(city)
    });
})