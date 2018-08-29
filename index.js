const express = require('express');
const app = express();

app.use('/bower', express.static(__dirname + '/bower_components'));
app.use('/node_modules/', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/src'));
app.listen(8089, () => {
  console.log('Server is running http://localhost:8089');
});