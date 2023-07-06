const Location = require("../models/location");

//create a location
const addlocation = (async (req, res) => {
    try {
        const {
            locationName,
            address,
            timeZone,
            coverageTime,
            clientDetail,
            locatedType,
            locatedWhere,
            site,
            stratingDate,
            endingDate,
            note
        } = req.body

        if (!locationName) {
            return res.status(401).send("kindly provide a location Name")
        }
        if (!address) {
            return res.status(401).send("kindly provide a address")
        }
        if (!timeZone) {
            return res.status(401).send("kindly provide a timeZone")
        }
        if (!coverageTime) {
            return res.status(401).send("kindly provide a CoverageTime")
        }
        if (!clientDetail) {
            return res.status(401).send("kindly provide a ClientDetail")
        }
        if (!locatedType) {
            return res.status(401).send("kindly provide a locatedtype")
        }
        if (!locatedWhere) {
            return res.status(401).send("kindly provide a locatedwhere")
        }
        if (!site) {
            return res.status(401).send("kindly provide a site")
        }
        if (!stratingDate) {
            return res.status(401).send("kindly provide a StratingTime")
        }
        if (!endingDate) {
            return res.status(401).send("kindly provide a EndingTime")
        }
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

module.exports = { addlocation, getlocation, deletelocation }