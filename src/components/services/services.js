import axios from "axios";

const API_KEY = 'ulLsiKubPsuwx8eRqDLB5kwVzujizaIhiMTjnsWe';

const marsDay = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SERVICE_API = async (pages, camera, sol = marsDay()) => await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera=${camera}&sol=${sol}&page=${pages}&api_key=${API_KEY}`)

export {SERVICE_API};
