const {
	generateRandomArrayNumbers,
	generateArrayByAlgoritmFischer,
	generateUniqueRandomNumber } = require('./generate-array.js');

const {
	ERROR_SIZE_IS_NOT_CORRECTED,
	ERROR_IN_GENERATE_UNIQUE_RANDOM_NUMBER,
	ERROR_IN_GENERATE_RANDOM_ARRAY_NUMBERS

} = require ('./constants/constants')

const logger = require('./helpers/logger');

describe('generateUniqueRandomNumber', () => {
	it('must generate one unique value = 5', () => {
		const size = 5;
		const set = new Set([3,2,1,4]);

		const value = generateUniqueRandomNumber(set, size);
		set.add(value);
		const arrayNumbers = Array.from(set)

		expect(value).toBe(5);
		expect(arrayNumbers.length).toBe(size)
	});
	it('should throw an error if the size is not a positive number', () => {
		const set = new Set()
		expect(()=>generateUniqueRandomNumber(new Set(), 0)).toThrowError(ERROR_SIZE_IS_NOT_CORRECTED);
	});
});

describe('generateRandomArrayNumbers', () => {
	it('should generate an array of unique random numbers with the given size', () => {
		const size = 10;
		const set = new Set();

		while (set.size < size) {
			set.add(generateUniqueRandomNumber(set, size));
		}
		const arrayNumbers = Array.from(set)

		//Checking for uniqueness of values in an array
		const unique = arrayNumbers.every((value, index, array) => array.indexOf(value) === index);
		expect(unique).toBe(true);

		//Check for all values from 1 to size in the array
		const containsAllValues = arrayNumbers.every(value => value >= 1 && value <= size);
		expect(containsAllValues).toBe(true);
		
		// Checking array length
		expect(arrayNumbers.length).toEqual(size);
	});
	it('should throw an error if the size is not a positive number', () => {
		const set = new Set()
		expect(()=>generateRandomArrayNumbers(new Set(), 0)).toThrowError(ERROR_SIZE_IS_NOT_CORRECTED);
	});
});


 describe('generateArrayByAlgoritmFischer', () => {
	it('should generate an array of numbers from 1 to size in a shuffled order', () => {
		const size = 10;
		const arrayNumbers = generateArrayByAlgoritmFischer(size);

		//Checking for uniqueness of values in an array
		const unique = arrayNumbers.every((value, index, array) => array.indexOf(value) === index);
		expect(unique).toBe(true);

		//Check for all values from 1 to size in the array
		const containsAllValues = arrayNumbers.every(value => value >= 1 && value <= size);
		expect(containsAllValues).toBe(true);

		// Checking array length
		expect(arrayNumbers.length).toEqual(size);
	});
});
