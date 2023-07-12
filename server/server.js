import express from 'express'

const PORT = 4000
const app = new express()

app.get('/', (res, req) => {
    req.status(200).json({"status": 'success!'})
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})