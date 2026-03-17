import jwt from "jsonwebtoken";

const validateToken = (req,resp,next)=>
    {
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if(authHeader && authHeader.startsWith("Bearer"))
            {
                token = authHeader.split(" ")[1];
                // console.log(token);
                jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>
                {
                    if(err)
                        {
                        return resp.status(401).json({message: "User is not Authorized."})
                        }
                        req.user= decoded;
                    console.log("Data for authorized person : ",decoded);
                    next();
                });
            }
        else{
            resp.json("No token found ");
        }
    }

export default validateToken;
