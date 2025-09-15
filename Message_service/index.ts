import express from 'express';
import dotenv from 'dotenv';
import e from 'express';
dotenv.config();
const app =express();
const PORT =process.env.MESSAGE_PORT;
app.get('/',(req,res)=>{
    res.send('from message service ...')
})
app.listen(PORT,()=>{console.log(`Message service listening at ${PORT}`);
})