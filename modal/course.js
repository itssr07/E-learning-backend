const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type: String,
    },
    price:{
        type: Number,
    },
    imageUrl:{
        type: String,
    },
});

module.exports = mongoose.model("Course", courseSchema);