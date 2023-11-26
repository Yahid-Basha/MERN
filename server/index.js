const express = require('express');
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')

app.use(express.json()) // allows us to use json
app.use(cors()) // cors allows us to make requests from the front end to the backend without getting blocked by the browser
mongoose.connect('mongodb+srv://dbYUser:dbYUserpwd@mern-0.tm9l0zc.mongodb.net/Mern-test?retryWrites=true&w=majority') // takes a string that reps cluster created in MDB

app.get('/getUsers',(req, res)=>{
    UserModel.find({})
    .then((users)=>{
        console.log('requested /getUsers')
        res.json(users)
    })
    .catch((err)=>{
        console.log(err)
        res.json(err)
    })
})

app.post('/createUser', async (req, res)=>{
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

app.listen(3001,()=>{
    console.log('Server is rnning')
})

