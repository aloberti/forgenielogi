function checkPassword(password, lengthmin=8,minnum=1,minletter=1,listofrules = []){
    if (password.length >= lengthmin){
        if (password.match(/[0-9]/g)!=null && password.match(/[0-9]/).length>=minnum){
            console.log(password.match(/[0-9]/g))
            if (password.match(/[a-zA-Z]/)!=null && password.match(/[a-zA-Z]/g).length>=minletter){
                listofrules.forEach(rule => {
                    if (!rule(password)){
                        return false
                    }
                })
                return true
            }
            return false
        }
        return false
    }
    return false
}

module.exports = checkPassword ;