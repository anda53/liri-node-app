


// var movieModule = require('./omdb');
// var imported_movie_command = movieModule.movie_command;
// var imported_movie_command = require('./omdb').movie_command;
// var twitterKeys = require('./keys').twitterKeys;
// var twitter= require('./twitter').twitter_command;  //requires twitter function getTweets
var spotify = require('spotify');
var spotifyFile = require('./spotify');
var import_spotify_command = require('./spotify').spotify_command


// movie-this
// ************Structure of the console command**********
// node liri.js movie-this '<movie name here>'

// getting the command arg
var command = process.argv[2];
var mTitle = process.argv[3];
//  confirm that console command works properly
// console.log(command);
// node liri.js spotify-this-song '<song name here>'
// node liri.js my-tweets
// if the user calls movie this

// confirms that movie-this is the command/process.argv[2]
if (command === 'movie-this'&& process.argv[3]){   //if command is equal to movie-this and 4th argument is not equal to blank
    // setting movie title
    var mTitle = process.argv[3];   
    console.log("the movie title is ", mTitle);
    // invoke imported_movie_command with mTitle
    imported_movie_command(mTitle);  

    // console.log('successfully called movie function');
}else if(command === 'movie-this' && !process.argv[3]){

	mTitle="Mr. Nobody";  
	imported_movie_command("Mr.Nobody"); 
	console.log(mTitle); 

}else if(command === 'spotify-this-song' && process.argv[3]){

	import_spotify_command(process.argv[3]);

}else if(command ==='spotify-this-song' && !process.argv[3]) {
	import_spotify_command("I saw the sign");

}else if(command === 'my-tweets'){
	twitter(); //properly reference the function here!?
}
 else if (command === 'do-what-it-says') { //If the 3rd argument is equal to 'do-what-it-says'
	fs.readFile('random.txt', 'utf8', function(error, data) { //read file random.txt
		if (error) {
			return console.log(error);//if there is an error, then console.log error
		};
		var randomArray = data.split(','); //takes the data from the response and splits it up into an array separated by commas
	
		
	});
};


// module.exports.movie_command = getMovie; 
