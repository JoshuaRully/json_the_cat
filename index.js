// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Woops Kitty Not Found /ᐠ｡ꞈ｡ᐟ\\:', error);
  } else {
    console.log(desc);
  }
});