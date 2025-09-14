const { argv } = require('node:process');

let counter = -2;
argv.forEach((val, index) => {
	  counter++;
});

if (counter == 0)
{
	console.log("No argument");
}else if (counter == 1)
{
	console.log("Argument found");
}
else
{
	console.log("Arguments found");
}
