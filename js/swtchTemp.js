import { updateAllTemperatures } from './card.js';
import { toggleUnit, getCurrentUnit } from './store.js';

const unitToggle = document.querySelector('#unitToggle')

unitToggle.addEventListener('click', () => {
    toggleUnit(); // 切換單位
    // currentUnit = currentUnit == "C" ? "F" : "C"
    updateAllTemperatures()
    // unitToggle.textContent = currentUnit === "C" ? "顯示 °F" : "顯示 °C";

    const nextLabel = getCurrentUnit() === "C" ? "顯示 °F" : "顯示 °C";
    unitToggle.textContent = nextLabel;
})




// info.dataset.temp