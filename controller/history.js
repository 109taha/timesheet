const History = require("../models/history");


const guardTask = async (req, res) => {
    const employee_Id = req.body
    if (!employee_Id) {
        return res.status(400).send({
            message: "no emoloyee Id found"
        })
    }
    const locatedWhere = req.body
    if (!locatedWhere) {
        return res.status(400).send({
            message: "you have to add located Where you wanna send a guard"
        })
    }
}
