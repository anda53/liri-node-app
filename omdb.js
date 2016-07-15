console.log('omdb connected');

var request = require('request');




function getMovie(title) {
    var dtitle;
    var year;
    var rating;
    var country;
    var language;
    var plot;
    var actors;
    var rottenTomatoesRating;
    var rottenTomatoesURL;

 
    // /assugning request url using that title
    var omdbUrl = "http://www.omdbapi.com/?t=" + title + '&tomatoes=true&r=json';
    request(omdbUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
           
            console.log(response);
            rBody = JSON.parse(body);
            // rJson = JSON.parse(response);
            dtitle = rBody['Title'];
            year = rBody['Year'];
            rating = rBody['Rated'];
            country = rBody['Country'];
            language= rBody ['Language'];
            plot = rBody['Plot'];
            actors = rBody['Actors'];
            rottenTomatoesRating = rBody['tomatoRating'];
            rottenTomatoesURL = rBody['tomatoURL'];
            console.log('the title is ', dtitle);
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