import express from "express"

const app = express()

app.get("/",(req,res)=>{
    console.log("...res")
    res.send("Сервер вообщето работает")
})
app.listen(5000,function(){
    const p = this.address().port
    console.log(p)
})