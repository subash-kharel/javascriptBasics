const key = 'kD8zQSaxdj0VBAjUiiT4YVnhVQ1i56mU';


//get cicy info to get location key
const getCity =  async (city) =>{
    const baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryParam = `?apikey=${key}&q=${city}`
     console.log(baseurl+queryParam);
// await will only assing data to response only when promise is complete.
// await returns a promise.
    const response = await fetch(baseurl + queryParam);

    //after we get response using fetch api we need to covert that into data using .json method
    //.json method also returns a promise so we need to have await
    const data = await response.json();
    return data[0];
}

getCity('Irving').then(data =>  { return getWeather(data.Key);})
                 .catch(err => console.log(err));

//getting current condidions using the location key
const getWeather = async (locId) => {  
    const baseurl = `http://dataservice.accuweather.com/currentconditions/v1/${locId}?apikey=${key}`
    const response = await fetch(baseurl);
    const data = await response.json();
    return data[0];
};

// different approach
// function fetchCurrentConditions(key) {
//   return new Promise(async (resolve, reject) => {
//     const baseURL = `http://dataservice.accuweather.com/currentconditions/v1/`;
//     const term = `${key}?apikey=${getAPIKey()}`;
//     const response = await fetch(baseURL.concat(term));
//     if (response && response.status === 200) {
//       const data = await response.json();
//       resolve(data[0]);
//     } else {
//       const error = new Error("Internal Server Error Occurred.");
//       error.statusCode = 500;
//       reject(error);
//     }
//   });
// }

// // fetch city information
// async function fetchCityData(city) {
//   const baseURL = `http://dataservice.accuweather.com/locations/v1/cities/search`;
//   const queryTerm = `?apikey=${getAPIKey()}&q=${city}`;
//   try {
//     const response = await fetch(baseURL.concat(queryTerm));
//     const data = await response.json();
//     form.reset();
//     return data[0];
//   } catch (ex) {
//     const error = new Error("An error occurred while fetching the data");
//     error.statusCode = 500;
//     throw error;
//   }
// }