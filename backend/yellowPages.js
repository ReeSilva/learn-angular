var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var contacts = [
	{name: "bruno da silva",   phone: "9999-2222", date: new Date(), telecom: {name: "Oi",   code: 14, cat: "Mobile", price: 2.20}},
	{name: "SANDRA MARIA",  phone: "9999-3333", date: new Date(), telecom: {name: "Vivo", code: 15, cat: "Mobile", price: 1}},
	{name: "Mariana De Oliveira", phone: "9999-9999", date: new Date(), telecom: {name: "Tim",  code: 41, cat: "Mobile", price: 3.50}}
];
var telecoms = [
	{name: "Oi",       code: 14, cat: "Mobile", price: 2.20},
	{name: "Vivo",     code: 15, cat: "Mobile", price: 1},
	{name: "Tim",      code: 41, cat: "Mobile", price: 3.50},
	{name: "Claro",    code: 21, cat: "Mobile", price: 0.50},
	{name: "Embratel", code: 21, cat: "Home",   price: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contacts', function(req, res) {
  res.json(contacts);
});

app.post('/contacts', function(req, res) {
	contacts.push(req.body);
  res.json(true);
});

app.get('/telecoms', function(req, res) {
  res.json(telecoms);
});
