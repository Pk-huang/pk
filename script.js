const cities = [
    "Taipei", "Tokyo", "Toronto", "New York", "London",
    "Paris", "Beijing", "Seoul", "Singapore", "Sydney"
  ];


const searchInput  = document.querySelector('#searchInput')
const suggestionList = document.querySelector('#suggestionList')


searchInput.addEventListener('input',function(){
    const keyword = searchInput.value.toLowerCase().trim()

    suggestionList.innerHTML = ''

    if(keyword == "") return

    let matchedCities = cities.filter(city => 
        city.toLowerCase().includes(keyword)
        // city.toLowerCase() == keyword
    )

    matchedCities.forEach(city => {
        let li = document.createElement('li')
        li.textContent = city
        

        suggestionList.appendChild(li)
    })

    console.log(matchedCities)
})

// console.log(searchInput,suggestionList)