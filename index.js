var dbManager = require('./dbManager.js');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/getuser', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  var callback = function (data){
  	res.send(data);
  };

  dbManager.getUsers(callback);
});

app.get('/getproducts', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
    dbManager.getProducts(function (data){
  	res.send(data);
  });
});

app.get('/getcompras', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	dbManager.getCompras(function (data){
  	res.send(data);
  });
});

app.post('/login', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	fs.readFile('./data/users.json', function (err, data) {
		  if (err){ throw err; }
	        if(json.parse(data.toString()).username === 'pepe'){
		       res.send(data);
	        }
		    else {
		    	res.send(false);
		    }
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

  console.log('INIT: Server listening on ' +  host + ":"+ port);

});


