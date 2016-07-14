
console.log('twitter connected');

//require the twitter package
var twitterKeys = require('./keys').twitterKeys;
var Twitter = require('./twitter');
var twitter = new Twitter(twitterKeys); //defines twitter as client and authenticates user (from twitter npm )

console.log('line6');


function getTweets(){

	var params = {
		screen_name: 'harlemgypsy',
		count:20
	};
	twitter.get('statuses/user_timeline', params, function(error, tweets, response){ //referenced from twitter's npm
	  if (!error) {
	  	var numTweets = tweets.length;
	    console.log(tweets);
	    console.log(response);
	  }
	});
	//print out your last 20 tweets in for loop
	for (var i = 0; i < tweets.length; i++) {
	
			if(err){
				return console.log(err);
			}else{

			}

	}
};

getTweets();



module.exports.twitter_command=getTweets


//as of now I must understand how twitter is defined so I can include it as the client