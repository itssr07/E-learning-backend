const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const course = require("./router/course")
const popular = require("./router/popular")

app.use(cors());
app.use("/", router);
const port = process.env.PORT || 5000;

const uri =
  "mongodb+srv://ranjanshitanshu10:O3cPwSxGBPg0kf3K@cluster0.uaqqjka.mongodb.net/test";

// //Connect to DB command
mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);


app.use(express.json());

app.use("/api/courses", course)
app.use("/api/populars", popular)

app.listen(port,()=>{
    console.log(`welcome to the tech world at PORT: ${port}`);
});


