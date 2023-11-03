// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://nyambika.com/nyapi/producers/login', // Replace with your API base URL
  timeout: 10000, // Set a reasonable timeout
});

export default instance;
