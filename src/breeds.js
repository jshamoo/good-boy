const axios = require("axios");
const { API_KEY, SECRET } = require("../config.js");

const getDogBreeds = () => {
  return new Promise((resolve, reject) => {
    axios("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      data: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((resp) => {
        const TOKEN = resp.data.access_token;
        return axios(`https://api.petfinder.com/v2/types/dog/breeds`, {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${TOKEN}`,
          },
        })
          .then((resp) => {
            resolve(resp.data.breeds.map((breed) => breed.name));
          })
          .catch((err) => {
            console.log("GET error", err);
            reject(err);
          });
      })
      .catch((err) => {
        console.log("POST error", err);
        reject(err);
      });
  });
};

const getDogs = (breed, location, size, age) => {
  return new Promise((resolve, reject) => {
    axios("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      data: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((resp) => {
        const TOKEN = resp.data.access_token;
        return axios("https://api.petfinder.com/v2/animals", {
          method: "GET",
          params: {
            type: "dog",
            breed,
            location,
            size,
            age,
            status: "adoptable",
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${TOKEN}`,
          },
        })
          .then((resp) => resolve(resp.data))
          .catch((err) => {
            console.log("GET Dogs error", err);
            reject(err);
          });
      })
      .catch((err) => {
        console.log("POST error", err);
        reject(err);
      });
  });
};

module.exports = { getDogBreeds, getDogs };
