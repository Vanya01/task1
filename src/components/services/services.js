import axios from "axios";

const API_KEY = 'ulLsiKubPsuwx8eRqDLB5kwVzujizaIhiMTjnsWe';

const API_SERVICE = async () => await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);

export {API_SERVICE};
