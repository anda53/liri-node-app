console.log('you got spotified');

var spotify = require("spotify");
var fs = require("fs");

Client_ID="88dbafbec66e4e2b88f6965b406cadb8";
Client_Secret="ba98f42bfab9485292f67368d4081708";

// node liri.js spotify-this-song '<song name here>'


// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from spotify
// The album that the song is from


var artist;
var songTitle;
var prevLink;
var album;



//make a spotify request via spotify


 	function spotifySong(song){
		spotify.search({ type: 'track', query: song }, function(error, data) {
			console.log(data);	
		    if (error){
		        return console.log(error);
		    }
		    var songObj= data['tracks']['items']; //inside the data, there are 2 arrays called tracks and items. these are thena ssigned to songObj
		    console.log(songObj);
		    for (var i = 0; i < songObj.length; i++) {
		    	console.log(i);
		    }
		    var songSpecs={
		    	artist:
		    	songTitle:
		    	prevLink:
		    	album:
		    }
		 //I need to be able to access the data first!!
		    // Do something with 'data' 
		});

	}

module.exports.spotify_command=spotifySong;  

// module.exports.movie_command = getMovie;


