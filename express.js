import express from "express"

const app = express()
const port = 80

app.get("/",(req,res)=>{
    res.send("Сервер вообщето работает")
})
app.listen(port,function(){
    console.log(`Сервер работает на ${port}`)
})