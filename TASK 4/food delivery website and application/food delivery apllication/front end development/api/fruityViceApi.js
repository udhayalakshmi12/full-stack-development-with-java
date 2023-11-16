const axios = require("axios");

const fruityViceApi = axios.create({
  baseURL: "https://www.fruityvice.com/api/fruit",
});

module.exports = fruityViceApi;
