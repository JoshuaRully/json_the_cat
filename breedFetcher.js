const request = require('request');
const input = process.argv.slice(2);
const breed = input[0];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    return error = console.log('Woops Kitty Not Found /ᐠ｡ꞈ｡ᐟ\\');
  }
  const data = JSON.parse(body);
  const description = data[0].description;
  console.log(description);
});