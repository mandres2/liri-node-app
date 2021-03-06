# LIRI Application
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/nodejs.gif)

# LIRI Bot

Created a LIRI that acts like the iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Motive:
The primary motive was to gain a foundational concept of utilizing Node.js and how it works in terms of pulling requested data from API databases. I believe through building this application I gained an understanding how installing JSON packages and npms coordinated with retrieving targeted data from APIs. Also, I learned how imperative it is to read thoroughly through npm documentation to make sure I am using the proper syntax in my code in order to execute the desired function. Overall, this experience was challenging yet rewarding in its ways.

## Getting Started

To get started: You will need to have an updated IDE (preferably VS Code), as well as having the latest version of Node.js

### Prerequisites

:black_small_square: IDE: Microsoft Visual Studios 1.37.1 (or higher).
<br>
:black_small_square: Node.js (Version: 12.9.0 or higher)

## Commands

**List of commands:**

![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/list_commands.gif)

1. spotify-this-song:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/spotify_this_song.gif)

2. movie-this:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/movie_this.gif)

3. concert-this:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/concert_this.gif)

4.do-what-it-says:
![alt text](https://github.com/mandres2/liri-node-app/blob/master/images/GIFS/do_what_it_says.gif)

### What are these Commands?
<br>
1. <b>spotify-this-song:</b> Searches the Spotify API Database and will pull out the title of the request track, artist, and album. Default is: 'The Sign,' by Ace of Base.
<br>
2. <b>movie-this:</b> Utilizing the 'request' npm the application will search the OMDb Database and retrieve the target movie, the user selected. If no movie is selected, the application automatically defaults to pulling out the movie: 'Mr. Nobody.'
<br>
3. <b>concert-this:</b> Utilizing the 'request' npm the application will search the BandsinTown Database and retrieve the target movie, the user selected. If no particular artist is selected, the applciation automatically defaults to retrieving data from the artist: Rich Brian.
<br>
4. <b>do-what-it-says:</b> This reads a file called random.txt. However what is written in random.txt is a command line to request a particular Spotify track, in which will be pulled from the Spotify API database and displayed on the terminal screen.

## Deployment

<b>Simply 'git push' the files into GitHub Profile and link repository to BCS.</b>

## Built With:

<br>
:black_small_square: Microsoft Studios Visual Code (v1.37.1)
<br>
:black_small_square: Google Chrome
<br>
:black_small_square: Node.js v12.9.0
<br>
:black_small_square: ShareX v12.4.1 - Screen Record User Functionality and converts to GIFs
<br>

## npm Packages Used:
:black_small_square: Axios API v0.19.0 - Used to grab data from the OMDB API and the Bands In Town API: https://www.npmjs.com/package/axios
<br>
:black_small_square: Node Spotify API: https://www.npmjs.com/package/node-spotify-api
<br>
:black_small_square: OMDb API - For movie-this feature: http://www.omdbapi.com/
<br>
:black_small_square: Moment API v2.24.0 - lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.: https://www.npmjs.com/package/moment
<br>
:black_small_square: Request v2.88.0 https://www.npmjs.com/package/request - Request npm calls out the data from OMDb and BandsinTown database.
<br>
:black_small_square: dotenv API v8.1.0 - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.: https://www.npmjs.com/package/dotenv
<br>
:black_small_square: chalk API - For colors in terminal: https://www.npmjs.com/package/chalk

## Author

**Micah Andres** - [mandres2](https://github.com/mandres2)

## License

<b>This project is licensed under the University of Washington License</b>

## Acknowledgments
*TAs - Catherine Pham, and Trae Shanks*
<br>
*Teacher - Arron Linton*

## Progress Log:
<br>
:heavy_check_mark: 8.20 - 8.21 - Review requirements. Established repository and created files.
<br>
:heavy_check_mark: 8.22 - Began coding functionality and targeting selected APIs once all npms have been installed. Ran trial runs for spotify api and "do-this" Ran couple test trials and recorded them with ShareX.
<br>
:heavy_check_mark: 8.23 - Worked on functionality for OMDb and Bands In Town APIs.
<br>
:heavy_check_mark: 8.24 - Debugging for all 4 methods, spotify-this, movie-this, concert-this, do-what-it-says.
<br>
:heavy_check_mark: 8.25 - Polishing up application and adjusting chalk npm colors.
<br>
:heavy_check_mark: 8.26 - Final Revision - Deployed Application

