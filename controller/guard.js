const Guard = require("../models/guards")

//admin creating a guard
const creatingGuard = (async (req, res) => {
    try {
        const { name, employee_ID, number, type, note } = req.body;
        if (!name) {
            return res.status(401).send({
                success: false,
                message: "kindly provide the name of the guard"
            })
        }
        if (!employee_ID) {
            return res.status(401).send({
                success: false,
                message: "kindly provide the employee_ID of the guard"
            })
        }
        if (!number) {
            return res.status(401).send({
                success: false,
                message: "kindly provide the number of the guard"
            })
        }
        if (!type) {
            return res.status(401).send({
                success: false,
                message: "kindly provide the type of the guard"
            })
        }

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

module.exports = {
    creatingGuard,
    getAllGuard,
}