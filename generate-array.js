const {
	ERROR_SIZE_IS_NOT_CORRECTED, 
	ERROR_IN_GENERATE_UNIQUE_RANDOM_NUMBER,
	ERROR_IN_GENERATE_RANDOM_ARRAY_NUMBERS,
	ERROR_GENERATE_ARRAY_BY_ALGORITM_FISCHER
	
} = require ('./constants/constants')

const logger = require('./helpers/logger');

/**
 * Generates a new number until it finds a unique one
 * @param [set:Set] set as class Set
 * @param {number} [size=10000] The size of the generated list.
 * @returns {number}
 */
 function generateUniqueRandomNumber(set, size) {
	try {
		if (size<=0 || typeof size !== 'number') {
			throw new Error(ERROR_SIZE_IS_NOT_CORRECTED)
		}

		let randomNumber = Math.floor(Math.random() * size) + 1;
		while (set.has(randomNumber)) {
			randomNumber = Math.floor(Math.random() * size) + 1;
		}
		return randomNumber;
	} catch (e) {
		logger.error(ERROR_IN_GENERATE_UNIQUE_RANDOM_NUMBER, e.message);
		throw e;
	}
}

/**
 * Generates an array of unique random numbers of size 
 * @param {Set} [set = Set()] set as class Set
 * @param {number} [size=10000] The size of the generated list.
 * @returns {number}
 */
  function generateRandomArrayNumbers(size) {
	try {
		if (size<=0 || typeof size !== 'number') {
			throw new Error(ERROR_SIZE_IS_NOT_CORRECTED)
		}
		const set = new Set();
		while (set.size < size) {
			set.add(generateUniqueRandomNumber(set, size));
		}
		return Array.from(set);
	} catch (e) {
			logger.error(ERROR_IN_GENERATE_RANDOM_ARRAY_NUMBERS, e.message);
			throw e;
	}
}

/**
 * This algoritms is considered to be the fastest
 * Fisher–Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param {number} [size=10000] The size of the generated list.
 */
function generateArrayByAlgoritmFischer(size){
	try {
		if (size<=0 || typeof size !== 'number') {
			throw new Error(ERROR_SIZE_IS_NOT_CORRECTED)
		}
		
		const array = Array.from({ length: size }, (_, i) => i + 1);
		for (let i = array.length - 1; i > 0; i --) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
		}
		return array;
	} catch (e) {
		logger.error(ERROR_GENERATE_ARRAY_BY_ALGORITM_FISCHER, e.message);
		throw e;
	}
}

module.exports  = {
	generateUniqueRandomNumber,
	generateRandomArrayNumbers,
	generateArrayByAlgoritmFischer
}
