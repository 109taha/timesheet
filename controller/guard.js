const Guard = require("../models/guards")

//admin creating a guard
const creatingGuard = (async (req, res) => {
    try {

        const guard = await Guard.findOne({ employee_ID });
        if (guard) {
            return res.status(401).json({
                success: false,
                message: "Guard is already listed"
            })
        }
        const newGuard = new Guard(req.body);
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
        })
    }
})

//get guard
const getAllGuard = (async (req, res) => {
    try {
        const guard = await Guard.find()
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
        if (!freeguards) {
            return res.status(400).send({ success: false, message: "can't find the free guard" })
        }
        return res.status(200).send({ success: true, message: freeguards })
    } catch (error) {
        res.status(500).send({ success: false, message: "something went wrong!" })
    }
})

//deleteguard
const deleteGuard = async (req, res) => {
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

};

//location
const locationVerify = async (req, res) => {
    // const location = req.body,
    // (location frond end ka banda send keray ga jb )
    // (api ko srif location verify krne hh k ya location === location)
}

module.exports = {
    creatingGuard,
    getAllGuard,
    deleteGuard,
    freeGuard
}