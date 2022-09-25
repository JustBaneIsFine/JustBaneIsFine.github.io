const sum = require('../testSum');


test('returns sum of two numbers',()=>{
	expect(sum(1,2)).toBe(3);
})