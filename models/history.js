const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    employee_Id: {
        type: String,
        require: true,
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    locatedWhere: {
        type: String,
        require: true,
        enum: ["Los Angeles A", "Los Angeles B", "North", "Mendota", "San Diego"]
    },
    locatedType: {
        type: String,
        require: true,
        enum: ["Commercial", "Construction"]
    },
    totalWorkingHour: {
        type: Number,
        require: true
    },
}, { timestamps: true }
)
const History = mongoose.model("guard", historySchema);

module.exports = History