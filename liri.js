//Liri takes the following arguments
// * my-tweets
// * spotify-this-song
// * movie-this
// * do-what-it-says

//these add other programs to this one
var dataKeys = require("./keys.js");
var fs = require('fs'); //file system
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var updateLog = function(data) {
    fs.appendFile('log.txt', '\n\n');
    fs.appendFile("log.txt", JSON.stringify(data), function(err){
        if(err) {
            return console.log(err);
        }

        console.log("text file was updated!");
    });

}

//handling twitter response 

var updateTweets = function (){
    var client = new twitter(datakeys.twitterKeys);

    var parameters = { screen_name: 'shawnmukherji', count: 10};

    client.get('statuses/user_timeline', parameters, function(error, tweets, response){
        if(!error){
            var data = [];
            for (var i = 0; i < tweets.length; i++){
                data.push({
                    'created:' : tweets[i].created.at,
                    'tweets:' : tweets[i].text,
                });
            }
            console.log(data);
            updateLog(data);
        }
    });
};


//handling OMDB request 

var getMovie = function(movieName) {

    if(movieName === undefined){
        movieName = 'Mr Nobody'
    }
}

var url = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";

//Callback JSON

//handling spotify request