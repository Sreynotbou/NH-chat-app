const express =require('express');
const app =express();

app.listen(process.env.PORT || 5000, ()=>console.log("server running..."));


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let users=[
    {name:'unknow'},
    {name:'sreyhieb'},
]

app.get('/users',(req,res)=>{
    res.send(users);
});

