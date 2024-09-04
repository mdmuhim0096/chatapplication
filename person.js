const mongoose = require("mongoose");
const sModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const modelData = mongoose.model("profile", sModel);
module.exports = modelData;
