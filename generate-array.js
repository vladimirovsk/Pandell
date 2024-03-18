/**
 * Generates a new number until it finds a unique one
 * @param [set:Set] set as class Set
 * @param {number} [size=10000] The size of the generated list.
 * @returns {number}
 */
function generateUniqueRandomNumber(set, size) {
	try {
		let randomNumber = Math.floor(Math.random() * size) + 1;
		while (set.has(randomNumber)) {
			randomNumber = Math.floor(Math.random() * size) + 1;
		}
		return randomNumber;
	} catch (e) {
		new Error(`Error generating unique random number: ${e.message}`);
	}
}

/**
 * Generates an array of unique random numbers of size size
 * @param {Set} [set = Set] set as class Set
 * @param {number} [size=10000] The size of the generated list.
 * @returns {number}
 */
function generateRandomArrayNumbers(size = 10000) {
	try {
		const set = new Set();
		while (set.size < size) {
			const randomNumber = generateUniqueRandomNumber(set, size);
			set.add(randomNumber);
		}
		return Array.from(set);
	} catch (e) {
		new Error(`Error generate random array numbers ${e.message}`);
	}
}


module.exports = {
	generateRandomArrayNumbers
}
