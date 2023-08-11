const Guard = require("../models/guards")

//admin creating a guard
const creatingGuard = (async (req, res) => {
    try {

        const newGuard = new Guard(req.body);
        const guard = await Guard.findOne({ employee_ID: newGuard.employee_ID });
        if (guard) {
            return res.status(401).json({
                success: false,
                message: "Guard is already listed"
            })
        }
        await newGuard.save()
        res.status(200).send({
            success: true,
            message: "guard created successfully!",
            guard: newGuard,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "something Went Wrong",
            error: error
        })
    }
})

//get guard
const getAllGuard = (async (req, res) => {
    try {
        const guard = await Guard.find()
        if (guard.lenth === 0) {
            return res.status(400).send({ success: false, message: "can't find the guard" })
        }
        return res.send({ success: true, guard });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "something went wrong"
        })
    }
})

// free guard
const freeGuard = (async (req, res) => {
    try {
        const freeguards = await Guard.find({ freeNow: true });
        if (freeguards.length === 0) {
            return res.status(400).send({ success: false, message: "can't find the free guard" })
        }
        return res.status(200).send({ success: true, message: freeguards })
    } catch (error) {
        res.status(500).send({ success: false, message: "something went wrong!" })
    }
})

// All Construction Guard
const AllConstructionGuard = (async (req, res) => {
    try {
        const freeguards = await Guard.find({ categories: "Construction" });
        if (freeguards.length === 0) {
            return res.status(400).send({ success: false, message: "can't find the Construction guard" })
        }
        return res.status(200).send({ success: true, message: freeguards })
    } catch (error) {
        res.status(500).send({ success: false, message: "something went wrong!" })
    }
})

// All Commercial Guard
const AllCommercialGuard = (async (req, res) => {
    try {
        const freeguards = await Guard.find({ categories: "Commercial" });
        if (freeguards.length === 0) {
            return res.status(400).send({ success: false, message: "can't find the Commercial guard" })
        }
        return res.status(200).send({ success: true, message: freeguards })
    } catch (error) {
        res.status(500).send({ success: false, message: "something went wrong!" })
    }
})

//deleteguard
const deleteGuard = (async (req, res) => {
    if (req.user.isSuperAdmin)
        try {
            const guard = await Guard.findByIdAndDelete(req.params.id);
            if (!guard) {
                return res.status(400).send({ success: false, message: "can't find the guard" })
            }
            res.status(200).send({ sucess: true, message: "guard has been delete" });
        } catch (err) {
            res.status(500).send(err);
        }
    else
        res.status(401).send({ sucess: false, message: "UNAUTHORIZED" });

});

//location
const locationVerify = (async (req, res) => {
    // const location = req.body,
    // (location frond end ka banda send keray ga jb )
    // (api ko srif location verify krne hh k ya location === location)
})

module.exports = {
    creatingGuard,
    getAllGuard,
    deleteGuard,
    freeGuard,
    AllConstructionGuard,
    AllCommercialGuard
}