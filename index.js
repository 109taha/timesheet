const adminRoute = require("./route/admin")
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/admin", adminRoute)

const connectToMongoDB = require("./config/connectMongdb");
connectToMongoDB();

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
});