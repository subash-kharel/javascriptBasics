const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) =>{
    const cityDets = data.cityDets;
    const weather = data.weather;

    //update details template
    details.innerHTML =
    ` <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>`


//remove the d-none class if present
if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
}
};


const updateCity = async (city) =>{
    
    const cityDets = await getCity(city);
    console.log('cityDets', cityDets);
    console.log('cityDets.Key', cityDets.Key)
    const weather = await getWeather(cityDets.Key);
    console.log('weather', weather)
    //if key and value names are same then we can return this way( Object shorthand notation)
    return {
        cityDets,
        weather
    };
    
    //   return {
    //     cityDets: cityDets,
    //     weather: weather
    // };
}


cityForm.addEventListener('submit', e =>{
    console.log('cityForm', cityForm);
    //prevent default actorion so that it doesnt not refresh the page
    e.preventDefault();

    //get city value
    const cityInput = cityForm.city.value.trim();
    //adding city Input to local storage so that next time user can see the default location searched for
    localStorage.setItem('cityName', cityInput);
    console.log('cityInput', cityInput)
    cityForm.reset();

    //update ui with new city
    updateCity(cityInput).then ((data)=>{
        updateUI(data);
    }).catch((error)=>console.log('errror', error));
})

if(localStorage.getItem('cityName')){
    updateCity(localStorage.getItem('cityName'))
    .then(data =>updateUI(data))
    .catch(error => console.log(error))
}