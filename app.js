const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({
        message: "Selamat Belajar",
        id: "1234"
    })
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Sistem sedang berjalan pada http://localhost:${PORT}`)
})