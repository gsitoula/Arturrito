var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/getuser', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile('./data/usuarios.json', function (err, data) {
	     if (err){ throw err; }
	        console.log("INFO: sending usuarios data... ");
		    console.dir(JSON.parse(data.toString()));
		    res.send(data.toString());
  });
});

app.get('/getproduct', function (req, res) {
	res.setHeader('Content-Type', 'application/json');

	fs.readFile('./data/productos.json', function (err, data) {
	     if (err){ throw err; }
	        console.log("INFO: sending productos data... ");
		    console.dir(JSON.parse(data.toString()));
		    res.send(data.toString());
	});
});

app.get('/getcompras', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	fs.readFile('./data/compras.json', function (err, data) {
		  if (err){ throw err; }
	        console.log("INFO: sending compras data... ");
		    console.dir(JSON.parse(data.toString()));
		    res.send(data.toString());
	});
});

app.post('/addproductcart', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	console.log("INFO: sending product cart data... ");
	res.send("cart");
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('INIT: Server UP on ' +  host + ":"+ port);

});


