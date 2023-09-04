// Student name : Rajesh Kumar
// ASU ID : 1224671266
// Date: September 03 2023

// Import the required modules

const express = require('express')
const bodyParser=require('body-parser');
const path=require('path');

//creating an instance of express
const app=express();
app.use(bodyParser.urlencoded({extended:false}));


// Use the body-parser middleware to parse the incoming request bodies.
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
console.log('views',path.join(__dirname,'views'));

// create a route for the home page
// The GET route for the form
app.get("/",(req,res)=>{
  res.render('index');
});

app.post("/calculate",(req,res)=>{
const {num1,num2}=req.body;
const sum=Number(num1)+Number(num2);
const difference=Number(num1)-Number(num2);
const product=Number(num1)*Number(num2);
const quotient=Number(num1)/Number(num2);
res.render("result",{sum,difference,product,quotient});
});

//starting server on the port 4000
var port=4000;
app.listen(port,()=>{
console.log(`server is running on port ${port}`);
});
















