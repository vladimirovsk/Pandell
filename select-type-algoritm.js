const { generateRandomArrayNumbers, generateArrayByAlgoritmFischer } = require("./generate-array");
const {INVALID_ALGORITM_TYPE} = require('./constants/constants')
const logger = require('./helpers/logger')

function selectTypeAlgoritm(payload){
	const startTime = Date.now();
	
	let randomList = {}
	const {type, size} = payload;
	try {
		switch (type) {
			case 0: {
				randomList = generateRandomArrayNumbers(size);
				break;
			}
			case 1: {
				randomList = generateArrayByAlgoritmFischer(size);
				break;
			}
			default: {
				throw new Error(`${INVALID_ALGORITM_TYPE}: ${type}`);
			}
		}

		return {
			runtime: `${Date.now() - startTime} ms`,
			type,
			size: randomList?.length,
			data: randomList
		}
	}
	catch (e){
		logger.error(`Error: ${e.message}`);
		throw e
	}
}

module.exports = {
	selectTypeAlgoritm
}
