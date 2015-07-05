var express = require('express');
var app = express();

app.use(express.static('public'));

//
app.get('/getuser', function (req, res) {
  res.send("user");
});

app.get('/getproduct', function (req, res) {
	res.send("producto");
});

app.post('/getcomprasbyuser', function (req, res) {
	res.send("compra");
});

app.post('/addproductcart', function (req, res) {
	res.send("cart");
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server UP', host, port);

});


