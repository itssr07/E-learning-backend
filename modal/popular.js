const mongoose = require("mongoose");

const popularSchema = new mongoose.Schema({
    courseName:{
        type: String,
    },
    userName:{
        type: String,
    },
    price:{
        type: Number,
    },
    imageUrl:{
        type: String,
    },
});

module.exports = mongoose.model("Popular", popularSchema);