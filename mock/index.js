const data = require('./data.json')
const Mock = require('mockjs')
var bodyParser = require('body-parser')

module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/test', (req, res) => {
        res.json(data.test)
    })

    app.get('/data', (req, res) => {
        let { start = 1, pageSize = 10 } = req.body
        if (req.query.start) start = +req.query.start
        if (req.query.pageSize) pageSize = req.query.pageSize
        start = Number(start)
        pageSize = Number(pageSize)
        
        let rand = []
        let dt = {
            success: true,
            code: 0,
            length: 46,
            start,
            pageSize,
            data: rand
        }
        let size = 0
        if (start < 46) {
            if (start + pageSize > 46) {
                size = 47 - start
            } else {
                size = pageSize
            }
        }
        console.log('size:', size, 'start:', start)
        for (let i = 0; i < size; i++) {
            rand.push(Mock.mock({
                name: /[a-zA-z]{3,5}/,
                email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,2}(\.[com|cn])$/,
                phone: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
            }))
        }

        res.json(dt)
    })
}