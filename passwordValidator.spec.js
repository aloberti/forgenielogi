const checkPassword = require('./passwordValidator')

describe('Check Password Length', () => {
    test('False test for length', () => {
        const result = checkPassword("a23456789",11)
        expect(result).toBe(false)
    })
    test('True test for length', () => {
        const result = checkPassword("a2345678910",11)
        expect(result).toBe(true)
    })
})

describe('Check Password for number', () => {
    test('False test for > 1', () => {
        const result = checkPassword("jhgvfcoiouhy")
        expect(result).toBe(false)
    })
    test('True test for number', () => {
        const result = checkPassword("jhgvfco1iouhy")
        expect(result).toBe(true)
    })
})
describe('Check Password for letter', () => {
    test('False test for > 1', () => {
        const result = checkPassword("12345678")
        expect(result).toBe(false)
    })
    test('True test for number', () => {
        const result = checkPassword("a12345678")
        expect(result).toBe(true)
    })
})