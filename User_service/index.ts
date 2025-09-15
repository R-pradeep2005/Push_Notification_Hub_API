import Express = require("express");
import dotenv from 'dotenv';
const app =Express()
dotenv.config();
const PORT=process.env.PORT
app.listen(PORT,()=>{console.log('hello listing... ');
})
