require("dotenv").config();
// This will run dotevn npm - Note: .env contains the Spotify Client ID and Secret Key Code
// This code is required to import the keys.js file and store it in a variable.
const keys = require("./keys.js");

//___________________________________________________________Spotify npm__________________________________________________________________________//

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

//____________________________________________________________Axios npm___________________________________________________________________________//
// Basic Node application for requesting data from the OMDb website & Bands In Town via: axios
// Here we incorporate the "axios" npm package
const axios = require("axios");

//____________________________________________________________Bands in Town npm__________________________________________________________________//
const bandsintown = require('bandsintown')("codingbootcamp");
// There seems to be an issue with pulling this....

//___________________________________________________________Moment.js npm _______________________________________________________________________//
// Date Formatting
const moment = require('moment');
moment().format();

//___________________________________________________________Chalk npm ___________________________________________________________________________//
const chalk = require('chalk');
// Reminder: Basically what chalk npm does is that styles the terminal with a small-range of color availability as well as styling the text.

// Test-run:
//console.log(chalk.blue('Hello world!'));  // Output: is good at 2136 08.21.19

//_____________________________________________________________fs npm ____________________________________________________________________________//
const fs = require('fs');

//______________________________________________________Variable Declaration______________________________________________________________________//
let command = process.argv[2];
let media_array = process.argv.slice(3);
let media = media_array.join(" ");

// These variables are associated with the user command functionality.

//_____________________________________________________________F(x)_______________________________________________________________________________//

function doThings(command, media) {
    switch (command) {

        case 'spotify-this-song':
            spotifyThis(media); break;
        case 'movie-this':
            movieThis(media); break;
        case 'concert-this':
            concertThis(media); break;
        case 'do-what-it-says':
            doWhatItSays(); break;
        default:
            console.log("Invalid command. Please type any of the following commands:");
            console.log(chalk.cyan("concert-this,"), chalk.green("spotify-this-song,"), chalk.yellow("movie-this,"), chalk.red("do-what-it-says"));
    };
};

// ============================================================================================================================================== //

// spotify-this-song

function spotifyThis(media) {
    // Default value
    if (media === "") {
        media = "The Sign Ace of Base"
    }

// Search Spotify API
    spotify
        .search({ type: 'track', query: media, limit: 1 })
        .then(function (response) {
            var song = response.tracks.items[0];
            if (song != undefined) {
                console.log();
                console.log(chalk.green("//======Song_Name======//"));
                console.log(song.name);

                console.log(chalk.green("//======Artist(s)======//"));
                for (i = 0; i < song.artists.length; i++) {
                    console.log(song.artists[i].name);
                }

                console.log(chalk.green("//======Preview_Link======//"));
                console.log(song.preview_url);

                console.log(chalk.green("//======Album======//"));
                console.log(song.album.name);
                console.log();
            } else {
                console.log("Unable to locate song.")
            }
        })
        .catch(function (err) {
            console.log(err);
        });
};

// ============================================================================================================================================== //

// movie-this

function movieThis(media) {
    // Default value
    if (media == "") {
        media = "Mr. Nobody"
    }
    request("http://www.omdbapi.com/?apikey=trilogy&t=" + media, function (error, response, data) {
        try {
            var response = JSON.parse(data)
            if (response.Title != undefined) {
                console.log(chalk.green("*************Movie Name**************"));
                console.log(response.Title);
                console.log(chalk.green("*****************Year****************"));
                console.log(response.Year);
                console.log(chalk.green("***" + response.Ratings[0].Source + " Rating****"));
                console.log(response.Ratings[0].Value);
                // This is in case there's only ratings from one source
                // at time of publication, ex: "Bad Times at the El Royale"
                try {
                    console.log(chalk.green("********" + response.Ratings[1].Source + " Rating*******"));
                    console.log(response.Ratings[1].Value);
                } catch { }
                console.log(chalk.green("****************Country**************"));
                console.log(response.Country);
                console.log(chalk.green("***************Language**************"));
                console.log(response.Language);
                console.log(chalk.green("*****************Plot****************"));
                console.log(response.Plot);
                console.log(chalk.green("****************Actors***************"));
                console.log(response.Actors);
                console.log();
            } else {
                console.log(chalk.red("This movie not found."));
            }
        }
        catch (error) {
            console.log(chalk.red("This movie not found."));
        }
    });
}
// ============================================================================================================================================== //

// concert-this

function concertThis(){

};

// ============================================================================================================================================== //

// do-what-it-says

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, response) {
        if (err) {
            console.log(err);
        }
        let params = (response.split(','));
        doThings(params[0], params[1]);
    });
};

// ============================================================================================================================================== //


doThings(command, media);
