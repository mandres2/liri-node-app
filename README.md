# liri-node-app
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/nodejs.gif)

# LIRI Bot

Created a LIRI that acts like the iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Getting Started

To get started: You will need to have an updated IDE (preferably VS Code), as well as having the latest version of Node.js

### Prerequisites

*IDE: Microsoft Visual Studios 1.37.1 (or higher).
*Node.js (Version: 12.9.0 or higher)

## Commands

**List of commands**

![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/list_commands.gif)


1. spotify-this-song:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/spotify_this_song.gif)

2. movie-this:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/movie_this.gif)

3. concert-this:

4.do-what-it-says:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/do_what_it_says.gif)

### What are these Commands?
<br>
1.spotify-this-song: Searches the Spotify API Database and will pull out the title of the request track, artist, and album. Default is: 'The Sign,' by Ace of Base.
<br>
1. movie-this: Utilizing the 'request' npm the application will search the OMDb Database and retrieve the target movie, the user selected. If no movie is selected, the application automatically defaults to pulling out the movie: 'Mr. Nobody.'
<br>
3. concert-this:
<br>
4. do-what-it-says: This reads a file called random.txt. However what is written in random.txt is a command line to request a particular Spotify track, in which will be pulled from the Spotify API database and displayed on the terminal screen.
<br>
## Deployment

Simply 'git push' the files into GitHub Profile and link repository to BCS.

## Built With:

<br>
Microsoft Studios Visual Code (v1.37.1)
<br>
Google Chrome
<br>
Node.js v12.9.0
<br>
ShareX v12.4.1 - Screen Record User Functionality and converts to GIFs
<br>

## npm Packages Used:
*Axios API v0.19.0 - Used to grab data from the OMDB API and the Bands In Town API: https://www.npmjs.com/package/axios
<br>
*Node Spotify API: https://www.npmjs.com/package/node-spotify-api
<br>
*OMDb API - For movie-this feature: http://www.omdbapi.com/
<br>
*Moment API v2.24.0 - lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.: https://www.npmjs.com/package/moment
<br>
*Request npm - Request npm calls out the data from OMDb and BandsinTown database.
<br>
*dotenv API v8.1.0 - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.: https://www.npmjs.com/package/dotenv
<br>
*chalk API - For colors in terminal: https://www.npmjs.com/package/chalk

## Authors

**Micah Andres** - *Initial work* - [mandres2](https://github.com/mandres2)

## License

This project is licensed under the University of Washington License

## Acknowledgments
*TAs - Catherine Pham, and Trae Shanks*
<br>
*Teacher - Arron Linton*

##Progress Log:
8.20 - 8.21 - Review requirements. Established repository and created files.
<br>
8.22 - Began coding functionality and targeting selected APIs once all npms have been installed. Ran trial runs for spotify api and "do-this" Ran couple test trials and recorded them with ShareX.
<br>
8.23 - Worked on functionality for OMDb and Bands In Town APIs.
<br>
8.24 - Debugging for all 4 methods, spotify-this, movie-this, concert-this, do-what-it-says.
<br>
8.25 - Polishing up application and adjusting chalk npm colors.
<br>
8.26 - Final Revision - Deployed Application

