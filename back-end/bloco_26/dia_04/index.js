const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send("Express: HTTP com Node.js")
});

app.listen(3000);