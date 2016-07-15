
//**
		 //I need to be able to access the data first!!

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





//make a spotify request via spotify


 	function spotifySong(song){
		spotify.search({ type: 'track', query: song }, function(error, data) {

		    if (error){
		        return console.log(error);
		    }
		    var songObj= data['tracks']['items']; //inside the data, there are 2 arrays called tracks and items. these are thena ssigned to songObj
		  	var stringified = JSON.stringify(songObj);
		  	// console.log('this is data.tracks' + data.tracks);
		  	// console.log('this is data.tracks.items' +data.tracks.items);
		  	// console.log('this is data.tracks.items[1]' + data.tracks.items[1]);
		    for (var i = 0; i < songObj.length; i++) {
		    	console.log('Artists: '+ songObj[i].artists.length);
		    	var songInfo = {
					'artist(s)': songObj[i].artists.name, 
					'song name': songObj[i]['name'], 
					'preview song': songObj[i]['preview_url'], 
					'album': songObj[i]['album']['name']
			};
		   
			}
			console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
			console.log("Song Name: " + data.tracks.items[0].name); 
			console.log("Preview URL: " + data.tracks.items[0].preview_url); 	 
	        console.log("Album Name: " + data.tracks.items[0].album.name);
	    
	      

		});

	};
	spotifySong();

module.exports.spotify_command=spotifySong;  

// module.exports.movie_command = getMovie;


