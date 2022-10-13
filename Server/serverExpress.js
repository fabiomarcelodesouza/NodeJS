const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const valor = req.query.dadoExterno
    const valorDoResponse = `Voce me mandou tal ${valor}`;
    res.send(valorDoResponse)
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor subiu com sucessinhos!
                 http://localhost:${port}`)
}) 