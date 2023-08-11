const Location = require("../models/location");
const jwt = require("jsonwebtoken")

//create a location
const addlocation = (async (req, res) => {
    try {
        const admin = req.headers.authorization.split(" ")[1];
        const decryptedToken = jwt.verify(admin, process.env.admin_jwt_secret);
        const Admin_Id = decryptedToken.userID

        const newLocation = new Location({ ...req.body, Admin_id: Admin_Id });
        await newLocation.save()
        res.status(200).send({
            success: true,
            message: "location created successfully!",
            location: newLocation,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "something went wrong"
        })
    }
})

//get all location
const getlocation = (async (req, res) => {
    try {
        const location = await Location.find();
        if (location.length === 0) {
            return res.status(400).send({
                message: "no location found"
            })
        }
        res.status(200).send(location)
    } catch (error) {
        res.stuatus(500).send({
            success: false,
            message: "something went wrong"
        })
    }
})

//delete location 
const deletelocation = async (req, res) => {
    try {
        const location = await Location.findByIdAndDelete(req.params.id);
        if (!location) {
            return res.status(400).send({ success: false, message: "can't find the location" })
        }
        res.status(200).send({ sucess: true, message: "location has been delete" });
    } catch (err) {
        res.status(500).send(err);
    }
};


module.exports = { addlocation, getlocation, deletelocation }