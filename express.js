import express from "express"

const app = express()
app.get("/",(req,res)=>{
    res.send("Сервер вообщето работает")
})
app.listen(8000,()=>{
    console.log("Сервер слушается на 8000порту")
})