const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(Error, null);
    }

    if (response.statusCode > 200 || response.statusCode < 200) {
      return callback(Error, null);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      return callback(Error, null);
    }

    return callback(null, breed.description);

  });
};

module.exports = { fetchBreedDescription };