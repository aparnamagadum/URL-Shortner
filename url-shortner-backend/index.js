import express from 'express'
import mongoose from 'mongoose'
import router from './router/router.js';
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
const app=express();
const port=process.env.port || 4000 
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.uri,{
        serverSelectionTimeoutMS: 5000,  // Increase timeout
      })
        .then(()=>{
         app.listen(port, ()=> console.log(`Server running on :${port}`)
        )})
         .catch((err)=> console.log(err)
         )
         
app.use('/',router);

