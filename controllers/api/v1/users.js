//require user model
const User = require("../../../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 12; 

//make post request to create a user
const create = async (req, res) => {
    console.log(req.body);
    console.log(req.body.username);
    
    let u = new User();
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let admin = req.body.admin;

    //new user
    u.username = username;
    u.password = password;
    u.email = email;
    u.admin = admin;

    //hash password
    u.password = await bcrypt.hash(password, salt);
   

    await u.save();
    res.json({
        status: u.status,
        message: "user created successfully",
        data:[{
            username: u.username,
            password: u.password,
            email: u.email,
            admin: u.admin,
        }]
    });
}

//add put to change password of user
const update = async (req, res) => {
    let user = await User.findById(req.params.id);
    user.password = req.body.password;

    //hash password
    user.password = await bcrypt.hash(user.password, salt);
    
    await user.save();
    res.json({
        status: "success",
        message: "user updated successfully",
        data: user
    });
}
//make login post request
const login = async (req, res) => {
    let user = await User.findOne({username: req.body.username});
    if(user){
        let match = await bcrypt.compare(req.body.password, user.password);
        if(match){
            let token = jwt.sign({id: user._id, admin: user.admin}, process.env.SECRET);
            res.json({
                status: "success",
                message: "user logged in successfully",
                data: {
                    user: user,
                    token: token
                }
            });
        }else{
            res.json({
                status: "error",
                message: "password does not match",
                data: null
            });
        }
    }else{
        res.json({
            status: "error",
            message: "username does not exist",
            data: null
        });
    }
}

module.exports.login = login;
module.exports.create = create;
module.exports.update = update;