const checkPassword = require('./passwordValidator')

describe('Check Password Length', () => {
    test('False test for length', () => {
        const result = checkPassword("123456")
        expect(result).toBe(false)
    })
    test('True test for length', () => {
        const result = checkPassword("12345678")
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