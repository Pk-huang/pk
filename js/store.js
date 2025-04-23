// store.js

// 溫度單位：'C'（預設）或 'F'
let currentUnit = 'C';


// 使用 Set 儲存城市名稱（小寫）
const renderedCities = new Set();

// ========================
// 溫度單位切換與查詢
// ========================

export function getCurrentUnit() {
  return currentUnit;
}

export function toggleUnit() {
  currentUnit = currentUnit === 'C' ? 'F' : 'C';
}

// ========================
// 城市管理
// ========================

export function addCity(cityName) {
  renderedCities.add(cityName.toLowerCase());
}

export function removeCity(cityName) {
  renderedCities.delete(cityName.toLowerCase());
}

export function hasCity(cityName) {
  return renderedCities.has(cityName.toLowerCase());
}

export function getAllCities() {
  return Array.from(renderedCities);
}
