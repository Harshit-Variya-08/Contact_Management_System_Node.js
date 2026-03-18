    import bcrypt from 'bcrypt';
    import jwt from 'jsonwebtoken';
    import userModel from "../Models/userModel.js";
import cookieParser from 'cookie-parser';
    
    //@ Desc : Register User
    // @router : POST api/users/register
    //@access public
    export const registerUser = async(req, resp) => {
        const {name, email , password} = req.body;
        const findUser= await userModel.findOne({email});
        if(findUser)
            {
              return resp.status(400).json({message: "User already registerd. please login"});
            }
            bcrypt.genSalt(10,(err,salt)=>
            {
                // console.log(salt);
                bcrypt.hash(password,salt,async(err,hash)=>
                {
                    console.log("Hased password : ",hash);
                        const user = await userModel.create({
                            name,
                            email,
                            password : hash
                        })
                        
                        resp.status(201).json({ message: "Registered", data : user });
                });
            })
        
    };


    //@ Desc : Login User
    // @router : POST api/users/login
    //@access public
    export const loginUser = async(req, resp) => {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user) return resp.json({message : "User not found."});
        //compare password with hased passwrod
        bcrypt.compare(password,user.password,(err,result)=>
        {
            if(result)
                {        
                    let accessToken = jwt.sign({user:{
                        email,
                        name: user.name,
                        id : user.id
                    }},process.env.JWT_SECRET,{expiresIn: "10m"});
                    resp.cookie("loginToken",accessToken);
                    resp.json({ message: "Logged in" ,token : accessToken});
                }
                else
                {
                    resp.json({message: "Password did not matched"});
                }
        })
    };

    //@ Desc : Current User info
    // @router : GET api/users/current
    //@access private
    export const currentUser = (req, resp) => {
    resp.json({ message: "Current User",data:req.user });
    };

