//require user model
const User = require("../../../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = 12; 

//make post request to create a user
const create = async (req, res) => {
    
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
try{
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    //validate inputs
    if(!oldPassword || !newPassword){
        res.json({
            status: "error",
            message: "old password and new password are required",
        });
        return;
    }

    //find user by id
    let user = await User.findById(req.params.id);


    //check if oldpassword matches using bcrypt compare
    let match = await bcrypt.compare(oldPassword, user.password);

    if(!match){
        res.json({
            status: "error",
            message: "old password does not match",
        });
        return;
    }


    //if match, hash new password
    let updatedPassword = await bcrypt.hash(newPassword, salt);

    //update user password

    await User.updateOne({_id: req.params.id}, {password: updatedPassword});

    //send response
    res.json({
        status: "success",
        message: "password updated successfully",
    });
}
catch{
    res.json({
        status: "error",
        message: "password not updated",
    });

}



    
}
//make login post request
const login = async (req, res) => {
    let user = await User.findOne({email: req.body.email});
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