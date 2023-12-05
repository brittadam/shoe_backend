//require user model
const User = require("../../../models/User");

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

module.exports.create = create;