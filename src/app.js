import express from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
 
const users=[];
const tweets=[];

app.post("/sign-up",(req,res)=>{
    const user=req.body;
    users.push(user);
    res.send("OK")
})
app.post("/tweets",(req,res)=>{
    const tweet=req.body
    const isLogedIn=users.find(person => person.username===tweet.username)
    
     if(!isLogedIn){
       return res.send("UNAUTHORIZED")
    }
    
        tweets.push(tweet);
        res.send("OK")
    
})
const PORT=5000

app.listen(PORT, () =>console.log(`servidor rodando em => ${PORT}`))