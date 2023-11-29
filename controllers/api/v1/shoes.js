//reaquire shoe model
const Shoe = require("../../../models/Shoe");

//make post request to create a shoe
const create = async (req, res) => {
    let laces = "laceable";
    let outside_1 = "red";
    let outside_2 = "green";
    let sole_bottom = "purple";
    let sole_top = "black";
    let status = "ordered";
    let user = "jan";
    let size = 10;
    let price = 100;
    let id = 1;

    let s = new Shoe();
    s.laces = laces;
    s.outside_1 = outside_1;
    s.outside_2 = outside_2;
    s.sole_bottom = sole_bottom;
    s.sole_top = sole_top;
    s.status = status;
    s.user = user;
    s.size = size;
    s.price = price;
    s.id = id;

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
            id: s.id,
        }]
    });
}

module.exports.create = create;