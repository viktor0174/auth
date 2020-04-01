const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const User = require("../models/Users")

users.use(cors())
process.env.SECRET_KEY = 'secretos'

users.post('/register', (req, res)=> {    
    const today = new Date()
    const userData = {        
        email: req.body.email,
        password: req.body.password,        
        username: req.body.username,
        family_name: req.body.family_name,
        sex: req.body.sex,
        birthday: req.body.birthday,
        created: today
    }
    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            //bcrypt.hash(req.body.password, 10, (err, hash) => {
            //userData.password = hash
                User.create(userData)
                .then(user => {
                    let token = jwt.sign(userData, process.env.SECRET_KEY);
                    res.json({token})
                })
                .catch(err => {
                    res.send('Register error:' + err)                    
                })
           // })
        }else{
            res.send("UserAlreadyEexists")
        }
    })
    .catch(err => {
        res.json({error:"Send register"})        
    })
})
//
users.post('/login', (req, res)=> {     
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(user => {       
        if(user){            
            //if(bcrypt.compareSync(req.body.password, user.password)){
                /*let token =jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn:1440
                })*/                
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY);
                res.json({token})                
            // }
        }else{            
            res.send('UserDoesNotExist')
        }
    })
    .catch(err => {
        res.send('Authorization: ' + err)       
    })
})
module.exports = users