import express from 'express'

const app = express()

function createServer(){

    app.get('/feature/:code', (req, res) =>{
        var param = req.params["code"]
        var a = {"code" : param, "enabled":true}
        console.log(a)
        res.send(a)
    })

    //app.listen(port, () => {
    //    console.log('Begin listening on port : ',port)
    //})

    return app;
}

export { createServer }