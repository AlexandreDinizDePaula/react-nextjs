import axios from "axios";

function urlBase(path) {
    
const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
    return `https://api.themoviedb.org/3/${path}?api_key=${
      API_KEY
    }`;
  }
export default (req,res) => {

res.setHeader("Content-type", "application/json");
axios(urlBase('movie/popular')).then(results => {
  
    res.end(JSON.stringify(results.data))
})}
  