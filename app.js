
const express = require('express');
const bodyParser = require('body-parser');
const index=require("./routes/index");
const details=require("./routes/details");
const products=require("./routes/products");
const cors=require("cors");


var app = express();
var server = app.listen(3000);
app.use(cors({
  origin:"http://127.0.0.1:5500"
}));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use("/index",index);
app.use("/details",details);
app.get('/detail',function(req,res) {
  res.sendFile('C:\\React\\xz\\public\\details.html');
});
app.use("/products",products);
app.get('/products',function(req,res) {
  res.sendFile('C:\\React\\xz\\public\\products.html');
});


