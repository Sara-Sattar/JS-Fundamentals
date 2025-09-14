const {argv} = require('node:process');


let var1;
let var2;

argv.forEach((value, index) => {
	if (index == 2)
	{
		var1 = value;
	}
	else if (index == 3)
	{
		var2 = value;
	}
});

console.log (`${var1} is ${var2}`);
