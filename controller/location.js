const Location = require("../models/location");

//create a location
const addlocation = (async (req, res) => {
    try {
        const newLocation = new Location(req.body);
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
    if (req.user.isSuperAdmin)
        try {
            const location = await Location.findByIdAndDelete(req.params.id);
            if (!location) {
                return res.status(400).send({ success: false, message: "can't find the location" })
            }
            res.status(200).send({ sucess: true, message: "location has been delete" });
        } catch (err) {
            res.status(500).send(err);
        }
    else
        res.status(401).send({ sucess: false, message: "UNAUTHORIZED" });
};

//location
const guardLocationVerify = async (req, res) => {
    // const location = req.body,
    // (location frond end ka banda send keray ga jb )
    // (api ko srif location verify krne hh k ya location === location)
}

module.exports = { addlocation, getlocation, deletelocation }