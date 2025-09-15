import express  from 'express';
import  dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import ratelimit from 'express-rate-limit';
dotenv.config();
const app = express();
const PORT=process.env.Gate_Way_PORT;
const limit=ratelimit({
    windowMs:15*60*1000,
    max:100,
    message:'Too many request from this ip ! wait for a while ...'
    
})
app.use(limit)
app.use('/',proxy(`${process.env.MESSAGE_MS_URL}`));
app.use('/user',proxy(`${process.env.USER_MS_URL}`));
app.listen(PORT,()=>{console.log('listing.. gateway');

})
