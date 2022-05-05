import express from "express"

const app = express()
const port = process.env.port || 8000

app.get("/",(req,res)=>{
    res.send("Сервер вообщето работает")
})
app.listen(port,function(){
    console.log(`Сервер работает на ${port}`)
})