var chalk = require("chalk");


var message = chalk.dim.underline("Hello ") + chalk.underline.blue.bold
("World" + chalk.whiteBright("!"));
console.log(message);
