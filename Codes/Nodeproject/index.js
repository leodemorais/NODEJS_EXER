
const express = require('express')

const app = express()

app.get('/', (req,res) => res.send('Oi mundo!'))

app.listen(999, () => console.log('Exemplo de app escutando na porta 999!'))
