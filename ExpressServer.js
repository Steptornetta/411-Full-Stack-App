const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors());

// http://www.redkid.net/cgi-bin/madlibs/drivingtest.pl
let MadLib = "Driving a car can be fun if you follow this " + "BLANK" +
 " advice: When approaching a " + "BLANK" + " on the right, always blow your " + "BLANK" +
 " Before making a " + "BLANK" + " turn, always stick your " + "BLANK" +
 " out of the window. Every 2000 miles, have your " + "BLANK" + "inspected and your " + "BLANK" +
 "checked. When approaching a school, watch out for " + "BLANK" + " " + "BLANK" +
 ". Above all, drive " + "BLANK" + ". The " + "BLANK" + " you save may be your own!"
;

let MadLibdata = "BLANK" ;


/*
GET API request. Sends the madlib to the client.
*/
app.get('/madlib', (req, res) => 
{
	console.log("GET MADLIB REQUEST");
	MadLibdata = getMadLib();
	res.send(MadLibdata);
});


app.put('/madlib/update/word1=:word1/word2=:word2/word3=:word3/word4=:word4/word5=:word5/word6=:word6/word7=:word7/word8=:word8/word9=:word9/word10=:word10/word11=:word11', (req, res) =>
{

	console.log(req.params.word1);
	console.log(req.params.word11);
	console.log("PUT REQUEST");
	MadLib = "Driving a car can be fun if you follow this " + req.params.word1 +
	 " advice: When approaching a " + req.params.word2 + " on the right, always blow your " + req.params.word3 +
	 " Before making a " + req.params.word4 + " turn, always stick your " + req.params.word5 +
	 " out of the window. Every 2000 miles, have your " + req.params.word6 + " inspected and your " + req.params.word7 +
	 " checked. When approaching a school, watch out for " + req.params.word8 + " " + req.params.word9 +
	 ". Above all, drive " + req.params.word10 + ". The " + req.params.word11 + " you save may be your own!"

	res.send(MadLib);

});

function getMadLib()
{
	if(fs.existsSync("story.txt"))
	{
		MadLibdata = fs.readFileSync('story.txt');
		return MadLibdata;
	}
	else
	{
		fs.writeFileSync('story.txt', MadLib, err =>
		{
			if (err) throw err;
			console.log('Saved File')
		});

		return MadLib;

	}
}


app.listen(port, () => console.log(`MadLib Server on: ${port}!`));
