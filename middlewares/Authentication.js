const jwt = require('jsonwebtoken');
const User = require('../models/User');
const userServices = require('../services/userServices');
require ('dotenv').config();
const key = process.env.KEY;
let blacklist =[];

class Authentication{
    VerifyToken(req,res,next){
        const authHeader = req.headers['authorization'];
        if(!authHeader)return res.status(403).json({message:'No token provided'});
        const token = authHeader.split(' ')[1];
        if(!token)return res.status(403).json({message:'No token provided'});
        jwt.verify(token, key,(err,decoded)=>{
            if(err){
                return res.status(401).json({message:"Failed to authenticate token"})
            }
            req.user= decoded;
            next();
        })}


        async verify(req,res){
            const authHeader = req.headers['authorization'];
            if(!authHeader)return res.status(403).json({message:'No token provided'});
            const token = authHeader.split(' ')[1];
            if(!token)return res.status(403).json({message:'No token provided'});
            jwt.verify(token, key,(err,decoded)=>{
                if(err){
                    return res.status(401).json({message:"Failed to authenticate token"})
                }
                req.user= decoded;
                return res.status(200).json({message:"Token is valid"})
            })}

            async login(req, res) {
                const crdentials = (({ email, password }) => ({ email, password }))(req.body);
                const user = await User.findOne(crdentials);
            
                // If no user is found, return a 400 status with a message
                if (!user) {
                    return res.status(400).json({ message: "User not found!" });
                }
            
                // Only proceed if user exists
                const token = jwt.sign({ email: user.email, name: user.name, id: user.id }, key, { expiresIn: '1h' });
                res.status(200).json({ token , });
            }
            

    async register(req,res){
       userServices.create(req,res);
    }

    logout(req, res){
        const authHeader = req.headers['authorization'];
        if(!authHeader) return res.status(403).json({message: 'No token provided'});

        const token = authHeader.split(' ')[1];
        if(!token) return res.status(403).json({message: 'No token provided'});

        blacklist.push(token);
        res.status(200).json({message: 'Logged out successfully'});

    }

    
}
module.exports= new Authentication