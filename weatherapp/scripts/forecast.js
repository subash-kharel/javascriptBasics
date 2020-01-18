class Forecast{

    constructor(){
        this.key = 'kD8zQSaxdj0VBAjUiiT4YVnhVQ1i56mU';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    
    async updateCity(city){

    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    //if key and value names are same then we can return this way( Object shorthand notation)
    return {
        cityDets,
        weather
    };
    }

    async getCity(cityInput){
 
    const queryParam = `?apikey=${this.key}&q=${cityInput}`
    const response = await fetch(this.cityURI + queryParam);
    const data = await response.json();
    return data[0];
    }

   async getWeather(locId){
    const baseurl = this.weatherURI +`${locId}?apikey=${this.key}`
    const response = await fetch(baseurl);
    const data = await response.json();
    return data[0];
    }
}





//Implementation before adding a OOPS structure 

// const key = 'kD8zQSaxdj0VBAjUiiT4YVnhVQ1i56mU';


// //get cicy info to get location key
// const getCity =  async (city) =>{
//     const baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const queryParam = `?apikey=${key}&q=${city}`
//      console.log(baseurl+queryParam);
// // await will only assing data to response only when promise is complete.
// // await returns a promise.
//     const response = await fetch(baseurl + queryParam);

//     //after we get response using fetch api we need to covert that into data using .json method
//     //.json method also returns a promise so we need to have await
//     const data = await response.json();
//     return data[0];
// }

// getCity('Irving').then(data =>  { return getWeather(data.Key);})
//                  .catch(err => console.log(err));

// //getting current condidions using the location key
// const getWeather = async (locId) => {  
//     const baseurl = `http://dataservice.accuweather.com/currentconditions/v1/${locId}?apikey=${key}`
//     const response = await fetch(baseurl);
//     const data = await response.json();
//     return data[0
//     ];
// };

