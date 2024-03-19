const yargs = require("yargs");
const { selectTypeAlgoritm } = require("./select-type-algoritm");

/**
 * Getting the external parameter of the array size
 * for example: node index.js -t=1 -s=5000
 * @param {size} [size=10000]
 */
const argv = yargs
	.option("type", {
		alias: "t",
		type: "type",
		default: 1,
		description: "Select algoritm generated"
	})
	.option("size", {
		alias: "s",
		type: "number",
		default: 10000,
		description: "The size of the generated list",
	})
	.argv;

const size = argv.size;
const type = argv.type;

console.log(selectTypeAlgoritm({type, size}))


