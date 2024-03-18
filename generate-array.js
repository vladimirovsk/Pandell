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
 * Generates an array of unique random numbers of size 
 * @param {Set} [set = Set()] set as class Set
 * @param {number} [size=10000] The size of the generated list.
 * @returns {number}
 */
  function generateRandomArrayNumbers(size) {
	try {
		if (size>0 && typeof size !== 'number') {
			throw new Error(`Error: size is not correct`)
		}
		console.log("SIZE:", size)

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

/**
 * This algoritms is considered to be the fastest
 * Fisher–Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param {number} [size=10000] The size of the generated list.
 */
function generateArrayByAlgoritmFischer(size){
	try {
		const array = Array.from({ length: size }, (_, i) => i + 1);
		for (let i = array.length - 1; i > 0; i --) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
		}
		return array;
	} catch (e) {
		console.error(`Something went wrong ${e.message}`)
	}
}

module.exports  = {
	generateRandomArrayNumbers,
	generateArrayByAlgoritmFischer
}
