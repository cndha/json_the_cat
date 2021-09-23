const args = process.argv.slice(2);

const request = require('request');

//error = network error
//response = http error, anything not in the 200s is unsuccessful

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], (error, response, body) => {

  if (error) {
    return console.log('Request Error');
  }

  if (response.statusCode > 200 || response.statusCode < 200) {
    return console.log('HTTP Not Found');
  }

  const data = JSON.parse(body);
  const breed = data[0];

  if (!breed) {
    return console.log('Breed Not Found!');
  }

  return console.log(breed.description);

});