const express = require('express');
const app = express();

app.set('port', 3000);
app.use('/bower', express.static(__dirname + '/bower_components'));
app.use('/node_modules/', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/src'));
app.listen(app.get('port'), () => {
  console.log(`Server is running http://localhost:${app.get('port')}`);
});