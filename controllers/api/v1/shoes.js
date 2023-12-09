//reaquire shoe model
const Shoe = require("../../../models/Shoe");

//make post request to create a shoe
const create = async (req, res) => {
    console.log(req.body);
    console.log(req.body.laces);
    
    let s = new Shoe();
    let laces = req.body.laces;
    let outside_1 = req.body.outside_1;
    let outside_2 = req.body.outside_2;
    let sole_bottom = req.body.sole_bottom;
    let sole_top = req.body.sole_top;
    let status = req.body.status;
    let user = req.body.user;
    let size = req.body.size;
    let price = req.body.price;


    s.laces = laces;
    s.outside_1 = outside_1;
    s.outside_2 = outside_2;
    s.sole_bottom = sole_bottom;
    s.sole_top = sole_top;
    s.status = status;
    s.user = user;
    s.size = size;
    s.price = price;


    await s.save();
    res.json({
        status: s.status,
        message: "shoe created successfully",
        data:[{
            laces: s.laces,
            outside_1: s.outside_1,
            outside_2: s.outside_2,
            sole_bottom: s.sole_bottom,
            sole_top: s.sole_top,
            user: s.user,
            size: s.size,
            price: s.price,
        }]
    });
}

const get = async (req, res) => {
    let shoes = await Shoe.find();
    res.json({
        status: "success",
        message: "shoes retrieved successfully",
        data: shoes
    });
}
//get by id
const getById = async (req, res) => {
    let shoe = await Shoe.findById(req.params.id);
    res.json({
        status: "success",
        message: "shoe retrieved successfully",
        data: shoe
    });
}


//delete a shoe by id
const remove = async (req, res) => {
    let id = req.params.id;
    await Shoe.deleteOne({_id: id});
    res.json({
        status: "success",
        message: "shoe deleted successfully",
        data: null
    });
}

//put request to update a shoe
const update = async (req, res) => {
    let id = req.params.id;
    let s = await Shoe.findById(id);
    s.status = req.body.status;
    await s.save();
    res.json({
        status: "success",
        message: "shoe updated successfully",
        data: s
    });
}


module.exports.create = create;
module.exports.get = get;
module.exports.remove = remove;
module.exports.getById = getById;
module.exports.update = update;

