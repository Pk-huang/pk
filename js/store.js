// store.js

// 溫度單位：'C'（預設）或 'F'
let currentUnit = 'C';


// 使用 Set 儲存城市名稱（小寫）
const renderedCities = new Set();

const StorageKey = 'StorageKey'

let PreviousStep
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
  savedStorage()
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

export function savedStorage() {
  let citiesArry = Array.from(renderedCities)
  localStorage.setItem(StorageKey, JSON.stringify(citiesArry))
}

export function readStorage() {
  return JSON.parse(localStorage.getItem(StorageKey)) || []
}
