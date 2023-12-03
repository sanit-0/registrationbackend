import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userrouter from './routers/user.router'

const app = express()

app.use(express.json())

app.use(express.static(__dirname))

app.use(cors())


const baseUrl= process.env.BASE_URL

const port = process.env.BASE_URL.split(':')[2];

app.get('/',(req,res)=>{
    res.send('Server is runnimg...')
})

// mongoose.connect('mongodb://127.0.0.1:27017/registration')
//     .then(()=>console.log('conected!'))
//     .catch(err => console.log(err))

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.listen(port,()=>{
    console.log(`server is running on ${process.env.BASE_URL}`)
})

app.use('/users',userrouter)
