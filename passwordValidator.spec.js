const checkPassword = require('./passwordValidator')

describe('Check Password Length', () => {
    test('False test', () => {
        const result = checkPassword("123456")
        expect(result).toBe(false)
    })
    test('True test', () => {
        const result = checkPassword("12345678")
        expect(result).toBe(true)
    })
})