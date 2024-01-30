import axios from "axios";

export const weathercall=async(location) => {
    let weatherDetail;
    try{
  await axios.get(`https://api.weatherapi.com/v1/current.json?key=6b1bd5d56694419ba4d65436242901&q=${location}`)
  
    .then(response => weatherDetail=(response.data));
  
    }
    catch(e){
      console.log(e)
    }
    return  weatherDetail;
}
