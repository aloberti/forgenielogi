function checkPassword(password){
    if (password.length >= 8){
        if (/\d/.test(password)){
            return /[a-zA-Z]/.test(password)
        }
        return false
    }
    return false
}

module.exports = checkPassword ;