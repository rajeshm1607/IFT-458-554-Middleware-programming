const express = require('express');

const app = express();

const welcomeMiddleware=(req,res,next)=>{
    console.log('welcome to my website');
    next();
}

const checkAdmin=(req,res,next)=>{
    if(req.query.admin==='true'){
        next();
    }else{
        res.status(400).send('should be admin');
    }
}

app.use(welcomeMiddleware);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000,()=>{
   console.log('Server is running on port 3000');
});
