const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()

app.use(morgan('combine'))
app.use(express.json())
app.use(cors())

app.get('/status', async (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.PORT || 8080)