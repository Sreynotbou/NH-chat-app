const express =require('express');
const app =express();
app.listen(process.env.PORT || 5000, ()=>console.log("server running..."));


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let message=[
    { name:'sreynouth' ,message:"Hi friends",color:"lightblue",time:"11:30:02",},
    {name:'sreyhieb',message:"Yes,hello baby",color:"orange",time:"11:30:02",},
    {name:'Molika',message:"How are you?",color:"pink",time:"11:30:02",},
    {name:"Sreytouch",message:"I am fine thanks",color:"yellow",time:"11:30:02",}

]

app.get('/message',(req,res)=>{
    res.send(message);
})


app.post('/message',(req,res)=>{
    let user={
        name:req.body.name,
        message:req.body.message,
        color:req.body.color,
        time:req.body.time,
    }
    message.push(user),
    res.send(message)
    
})



let users=[
    { name:'sreynouth' ,color:"lightblue",password:"123"},
    {name:'sreyhieb',color:"orange",password:"123"},
    {name:"Molika",color:"pink",password:"123"},
    {name:"Sreytouch",color:"green",password:"123"},
]

app.get('/users',(req,res)=>res.send(users));

// let icons = [
//     {id: 1, icon: '😓', sign: '):'},
//     {id: 2, icon: '😄', sign: '(:'},
//     {id: 3, icon: '😭', sign: 'cry'},
//     {id: 4, icon: '🥰', sign: 'love'},
//     {id: 5, icon: '😷', sign: 'sick'},
//     {id: 6, icon: '😲', sign: 'wow'},
//     {id: 7, icon: '😤', sign: 'bore'},
//     {id: 8, icon: '🥱', sign: 'sleep'},
//     {id: 9, icon: '😋', sign: 'haha'},
//     {id: 10, icon: '🤬', sign: 'angry'},
// ]
    
// app.get('/emoji', (req, res) => res.send(icons));