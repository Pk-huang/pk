const cities = [
    "Taipei", "Tokyo", "Toronto", "New York", "London",
    "Paris", "Beijing", "Seoul", "Singapore", "Sydney"
  ];
  
  const searchInput = document.getElementById("searchInput");
  const suggestionList = document.getElementById("suggestionList");
  
  // 偵測輸入事件
  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase().trim();
  
    // 清空舊的建議
    suggestionList.innerHTML = "";
  
    if (keyword === "") return;
  
    const matchedCities = cities.filter(city =>
      city.toLowerCase().includes(keyword)
    );
  
    matchedCities.forEach(city => {
      const li = document.createElement("li");
      li.textContent = city;
      li.addEventListener("click", () => {
        searchInput.value = city;
        suggestionList.innerHTML = "";
        console.log("選擇城市：", city); // 可接後續 fetch 天氣用
      });
      suggestionList.appendChild(li);
    });
  });
  