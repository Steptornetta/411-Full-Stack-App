const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors());

let MadLib = [];
let MadLibdata = [];
/*
GET API request. Sends the reservation list to the client.
*/
app.get('/madlib', (req, res) => 
{
	console.log("GET MADLIB REQUEST");
	MadLibdata = getMadLib();
	MadLib = JSON.parse(MadLibdata);
	console.log(MadLibdata);
	res.send(MadLibdata);
});


// http://www.redkid.net/cgi-bin/madlibs/drivingtest.pl
function getMadLib()
{
	if(fs.existsSync('story.txt'))
	{
		MadLibdata = fs.readFileSync('story.txt');
		console.log(MadLibdata);
		return MadLibdata;
	}
	else
	{
		console.log("There is no story file.")
		return "No story Error";
	}
}

app.listen(port, () => console.log(`MadLib Server on: ${port}!`));
