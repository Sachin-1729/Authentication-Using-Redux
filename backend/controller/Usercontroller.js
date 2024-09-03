const User = require('../model/Users')

function getuser(req , res)
{
    res.send('Hello, world!');
}

async function signup(req , res)
{
    try {
        const email = req.body.email;
        if(await User.findOne({email:email}))
        {
            return res.status(400).send("User already exists");
        }
        const user = new User({
            email: req.body.email,
            password: req.body.password
        })
        await user.save();
        
       
      
        res.status(201).json("User created successfully");
    
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send("Error saving user data");
    }
}


async function signin(req , res) 
{   
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({email:email});
    if(!user)
    {
        res.status(400).send("User not found");   
    }
    else if(user.password !== password){
        res.status(400).send("Incorrect Password");
    }
    else{
        const token = Math.floor(100000 + Math.random() * 900000);
        const expiryTime = Date.now() + 10000; // 30 seconds from now
        console.log(expiryTime);
        const expiryDate = new Date(expiryTime);
        console.log(expiryDate.toString());

        res.status(200).json({ token: token , expiretime: expiryTime  } );
        
        
    }

    
}

module.exports = {getuser , signup , signin}