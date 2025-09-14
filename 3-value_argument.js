const {argv} = require ('node:process');


let counter = -2;
argv.forEach((index, value) => {
	if (counter == 0)
	{
		console.log(`${index}`);
	}
	counter++;
});

if (counter == 0)
{
	console.log("No argument");
}
