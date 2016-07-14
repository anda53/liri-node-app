// At the top of the liri.js file, write the code you need
// to grab the data from keys.js. Then store the keys in a variable.
// 
var twitterKeys = require('./keys').twitterKeys;
// var movieModule = require('./omdb');
// var imported_movie_command = movieModule.movie_command;
var imported_movie_command = require('./omdb').movie_command;
var twitter= require('./twitter').twitter_command;  //requires twitter function getTweets
var spotify = require('spotify');


// movie-this
// ************Structure of the console command**********
// node liri.js movie-this '<movie name here>'

// getting the command arg
var command = process.argv[2];

//  confirm that console command works properly
// console.log(command);





// if the user calls movie this

// confirms that movie-this is the command/process.argv[2]
if (command === 'movie-this'&& process.argv[3]!=='') {   //if command is equal to movie-this and 3rd argument is not equal to blank
    // setting movie title
    var mTitle = process.argv[3];   
    console.log("the movie title is ", mTitle);
    // invoke imported_movie_command with mTitle
    imported_movie_command(mTitle);  //? this looks like a variable--please review lines 5-7 

    // console.log('successfully called movie function');
}else (command === 'movie-this' && argv[3] === ''){
	mTitle="Mr. Nobody";    

}

