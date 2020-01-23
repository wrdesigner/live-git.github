const express = require('express');

const app = express()

app.get('/teste', (req, res) =>{
  return res.jason({hello: 'world'})
});

app.listen(3333);