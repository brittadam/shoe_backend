const Shoe = require("../../../models/Shoe");

const create = async (req, res) => {
    
    let s = new Shoe();
    let laces_color = req.body.laces_color;
    let outside_1_color = req.body.outside_1_color;
    let outside_2_color = req.body.outside_2_color;
    let outside_3_color = req.body.outside_3_color;
    let inside_color = req.body.inside_color;
    let sole_bottom_color = req.body.sole_bottom_color;
    let sole_top_color = req.body.sole_top_color;
    
    let laces_material = req.body.laces_material;
    let outside_1_material = req.body.outside_1_material;
    let outside_2_material = req.body.outside_2_material;
    let outside_3_material = req.body.outside_3_material;
    let inside_material = req.body.inside_material;
    let sole_bottom_material = req.body.sole_bottom_material;
    let sole_top_material = req.body.sole_top_material;

    let status = req.body.status;
    let user = req.body.user;
    let size = req.body.size;
    let price = req.body.price;

    s.laces_color = laces_color;
    s.outside_1_color = outside_1_color;
    s.outside_2_color = outside_2_color;
    s.outside_3_color = outside_3_color;
    s.inside_color = inside_color;
    s.sole_bottom_color = sole_bottom_color;
    s.sole_top_color = sole_top_color;

    s.laces_material = laces_material;
    s.outside_1_material = outside_1_material;
    s.outside_2_material = outside_2_material;
    s.outside_3_material = outside_3_material;
    s.inside_material = inside_material;
    s.sole_bottom_material = sole_bottom_material;
    s.sole_top_material = sole_top_material;

    s.status = status;
    s.user = user;
    s.size = size;
    s.price = price;

    // Aanpassing om de datum te formatteren naar "YYYY-MM-DD"
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let formattedDate = date.toISOString().split('T')[0];
    s.date = formattedDate;

    await s.save();
    res.json({
        status: s.status,
        message: "shoe created successfully",
        data:[{
            laces_color: s.laces_color,
            outside_1_color: s.outside_1_color,
            outside_2_color: s.outside_2_color,
            outside_3_color: s.outside_3_color,
            inside_color: s.inside_color,
            sole_bottom_color: s.sole_bottom_color,
            sole_top_color: s.sole_top_color,

            laces_material: s.laces_material,
            outside_1_material: s.outside_1_material,
            outside_2_material: s.outside_2_material,
            outside_3_material: s.outside_3_material,
            inside_material: s.inside_material,
            sole_bottom_material: s.sole_bottom_material,
            sole_top_material: s.sole_top_material,

            user: s.user,
            size: s.size,
            price: s.price,
            id: s._id,
            date: s.date,
        }]
    });
}

const get = async (req, res) => {
    const date = req.query.date;
    const dateQuery = {};

    if (date) {
        dateQuery.date = new Date(date);
    }

    let shoes = await Shoe.find(dateQuery);

    if (shoes.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "No shoes found on the specified date."
        });
    }

    res.json({
        status: "success",
        message: "Shoes retrieved successfully",
        data: shoes
    });
}

const getById = async (req, res) => {
    let shoe = await Shoe.findById(req.params.id);
    res.json({
        status: "success",
        message: "Shoe retrieved successfully",
        data: shoe
    });
}

const remove = async (req, res) => {
    let id = req.params.id;
    await Shoe.deleteOne({_id: id});
    res.json({
        status: "success",
        message: "Shoe deleted successfully",
        data: null
    });
}

const update = async (req, res) => {
    let id = req.params.id;
    let s = await Shoe.findById(id);
    s.status = req.body.status;
    await s.save();
    res.json({
        status: "success",
        message: "Shoe updated successfully",
        data: s
    });
}

module.exports.create = create;
module.exports.get = get;
module.exports.remove = remove;
module.exports.getById = getById;
module.exports.update = update;
