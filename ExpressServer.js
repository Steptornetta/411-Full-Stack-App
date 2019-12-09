const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors());

// http://www.redkid.net/cgi-bin/madlibs/drivingtest.pl
let MadLib = [
"Driving a car can be fun if you follow this BLANK.advice: \
When approaching a BLANK.on the right, always blow your BLANK.\
Before making a BLANK.turn, always stick your BLANK.out of the window.\
Every 2000 miles, have your BLANK.inspected and your BLANK.checked.\
When approaching a school, watch out for BLANK.BLANK.\
Above all, drive BLANK. The BLANK.you save may be your own!"

];

let MadLibdata = [];


/*
GET API request. Sends the madlib to the client.
*/
app.get('/madlib', (req, res) => 
{
	console.log("GET MADLIB REQUEST");
	MadLibdata = getMadLib();
	res.send(MadLibdata);
});



app.put('/madlib/update'. (req, res) =>
{
	console.log("PUT REQUEST");

});

function getMadLib()
{
	if(fs.existsSync("story.txt"))
	{
		//fs.writeFile(, data, options, flag?, mode?, callback)
		MadLibdata = fs.readFileSync('story.txt');
		return MadLib;
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
