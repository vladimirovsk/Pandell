const yargs = require("yargs");
const  { generateRandomArrayNumbers} = require("./generate-array");

const argv = yargs
	.option("size", {
		alias: "s",
		type: "number",
		default: 10000,
		description: "The size of the generated list",
	})
	.argv;

const size = argv.size;

const randomList = generateRandomArrayNumbers(size);
console.log(randomList);
