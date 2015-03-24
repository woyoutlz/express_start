var express = require('express')
var app = express()
var cons = require("consolidate")
var pageRoute = require("./route/index")
app.engine('html', cons.swig);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
  res.render('test');
})

// 以前一个为准
app.use('/',pageRoute);

app.get('/', function (req, res) {
  res.send('Hello World!')
})


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})