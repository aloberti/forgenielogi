function checkPassword(password){
    if (password.length >= 8){
        return /\d/.test(password)
    }
    return false
}

module.exports = checkPassword ;