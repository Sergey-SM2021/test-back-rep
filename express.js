import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("Сервер вообщето работает")
})
app.listen(5000,function(){
    console.log(`Сервер работает на 5000`)
})