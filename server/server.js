const express = require ('express');
const app = express();


app.get('/',(req,res)=>{
    res.status(404).send({
        error: "Page not found",
        name:"Mocha-test"
    })
});

app.get('/users',(req,res)=>{
    res.send([{
        name:"me",
        age:39
    },{
        name:"Mr. Bill",
        age:5
    },{
        name:"girl",
        age:32
    }])
});


app.listen(3000);

module.exports.app = app;