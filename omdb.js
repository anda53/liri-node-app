var request = require('request');
// This will output the following information to your terminal/bash window:

// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// Rotten Tomatoes Rating.
// Rotton Tomatoes URL
// 
// make an omdb request via request

// / write a function to retrieve movie info take movie title
// makes a request to omdb
// 

function getMovie(title) {
    var title;
    var year;
    var rating;
    var country;
    var language;
    var plot;
    var actors;
    var rottenTomatoesRating;
    var rottenTomatoesURL;



    var titleParam = title;
    // /assugning request url using that title
    var omdbUrl = "http://www.omdbapi.com/?t=" + title + '&tomatoes=true&r=json';
    request(omdbUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response);
            rBody = JSON.parse(body);
            // rJson = JSON.parse(response);
            title = rBody['Title'];
            year = rBody['Year'];
            rating = rBody['Rated'];
            country = rBody['Country'];
            language= rBody ['Language'];
            plot = rBody['Plot'];
            actors = rBody['Actors'];
            rottenTomatoesRating = rBody['tomatoRating'];
            rottenTomatoesURL = rBody['tomatoURL'];
            console.log('the title is ', title);
            console.log('the year is ', year);
            console.log('the rating is ', rating);
            console.log('the country is ', country);
            console.log('the language is' , language);
            console.log('the plot is', plot);
            console.log('the actors are', actors);
            console.log('the Rotten Tomatoes Rating is', rottenTomatoesRating);
            console.log('the Rotten Tomatoes URL is', rottenTomatoesURL);

            // console.log(rBody);
            // console.log(response);
            // console.log(rJson);
        }
    })
    // body...
}


module.exports.movie_command = getMovie;