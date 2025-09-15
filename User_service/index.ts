import express from "express";
import dotenv from 'dotenv';
import proxy from "express-http-proxy";
const app =express()
dotenv.config();
const PORT=process.env.PORT
// after auth the request is redirected to message service
if(false){
    app.use('/',proxy(`${process.env.MESSAGE_MS_URL}`))
}
app.get('/',(req,res)=>{
res.send('Invalid Api key ... ')
})
app.listen(PORT,()=>{console.log('hello listing... ');
    
})
