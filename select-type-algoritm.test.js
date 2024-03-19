const logger = require('./helpers/logger');
const { selectTypeAlgoritm} = require('./select-type-algoritm')
const {INVALID_ALGORITM_TYPE, ERROR_SIZE_IS_NOT_CORRECTED } = require('./constants/constants')
describe('start application', ()=>{
	it('OK, selectTypeAlgoritm by type=0 size=20', () => {
		const payload = {type:0, size:20}
 		const result = selectTypeAlgoritm(payload)
		expect(result.type).toBe(payload.type)
		expect(result.size).toBe(payload.size)
		expect(result.data.length).toBe(payload.size)
	})
	it('OK, selectTypeAlgoritm by type=1 size=20', () => {
		const payload = {type:1, size:20}
		const result = selectTypeAlgoritm(payload)
		expect(result.type).toBe(payload.type)
		expect(result.size).toBe(payload.size)
		expect(result.data.length).toBe(payload.size)
	})
	it('Error algoritm type, selectTypeAlgoritm by type=3 size=20', () => {
		const payload = {type:3, size:20}
		expect(()=>selectTypeAlgoritm(payload)).toThrowError(INVALID_ALGORITM_TYPE)
	})
	it('Error size, selectTypeAlgoritm by type=3 size=20', () => {
		const payload = {type:1, size:0}
		expect(()=>selectTypeAlgoritm(payload)).toThrowError(ERROR_SIZE_IS_NOT_CORRECTED)
	})
})
