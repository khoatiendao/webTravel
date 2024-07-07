const express = require('express')
const app = express()
const bodyparser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || 8445

app.use(express.json())
app.use(bodyparser.json())

app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
})

app.get("/", (req, res) => {
    res.send('Welcome to web movie')
})


