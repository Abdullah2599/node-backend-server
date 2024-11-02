const jwt = require('jsonwebtoken');
const User = require('../models/User');
require ('dotenv').config();
const key = process.env.KEY;

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
        })
    }

    async login(req,res){
        const crdentials = (({email,password}) =>({email,password}))(req.body);
        const user = await User.findOne(crdentials);
        if(!user){
            res.status(400).json({message:"User not found!"})
        }
        const token = jwt.sign({email: user.email, name: user.name, id: user.id} ,key,{expiresIn:'1h'});
        res.status(200).json({token});
    }
    catch(e){
        res.status(400).json({message:e})
    }

}
module.exports= new Authentication