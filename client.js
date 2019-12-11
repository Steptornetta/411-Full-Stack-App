function getMadLib()
{
	console.log("helooo");
	let word1 = document.querySelector("#word1").value;
	let word2 = document.querySelector("#word2").value;
	let word3 = document.querySelector("#word3").value;
	let word4 = document.querySelector("#word4").value;
	let word5 = document.querySelector("#word5").value;
	let word6 = document.querySelector("#word6").value;
	let word7 = document.querySelector("#word7").value;
	let word8 = document.querySelector("#word8").value;
	let word9 = document.querySelector("#word9").value;
	let word10 = document.querySelector("#word10").value;
	let word11 = document.querySelector("#word11").value;

	let request = new XMLHttpRequest();

	request.open("PUT", "http://127.0.0.1:3000/madlib/update/word1=" + word1 +
	 "/word2=" + word2 + "/word3=" + word3 + "/word4=" + word4 + "/word5=" + word5 + "/word6=" + word6 + "/word7=" + word7 +
	  "/word8=" + word8 + "/word9=" + word9 + "/word10=" + word10 + "/word11=" + word11, true);

	request.onload = function()
	{
		console.log(request.status);
		if(request.status == 200)
		{
			console.log(request.response);
			let story = document.createElement("p");
			let storytext = document.createTextNode(request.response);
			story.appendChild(storytext);

			document.querySelector("#storytable").appendChild(story);

		}
	}

	request.send();

}