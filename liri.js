require("dotenv").config();
// This code is required to import the keys.js file and store it in a variable.
const keys = require("./keys.js");
//___________________________________________________________Spotify npm__________________________________________________________________________//

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

//____________________________________________________________Axios npm___________________________________________________________________________//
// Basic Node application for requesting data from the OMDb website & Bands In Town via: axios
// Here we incorporate the "axios" npm package
const axios = require("axios");

//____________________________________________________________OMDb___________________________________________________________________________//

// Grab or assemble the movie name and store it in a variable called "movieName"
let movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified

let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then create a request with axios to the queryUrl

// Make a request for a user with a given ID
// Be careful when using quotes. (i.e. 'queryUrl' will give a undefined output).
axios.get(queryUrl)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


