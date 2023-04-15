import express from 'express';

const app=express()
app.get('/',(req,res)=>{
    res.json({msg:"This is a msg"});
})
app.listen(5050,()=>console.log("server is Running"))
module.exports = app;
