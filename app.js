const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;

app.set("view engine", "ejs");

mongoose
    .connect("mongodb://127.0.0.1:27017/exampleDB") //Need to use 127.0.0.1,localhost might defeat.
    .then(() => {
        console.log("Connect mongoDB successfully...");
    })
    .catch((e) => {
        console.log(e);
    });

const studentSchema = new Schema({
    name: String, //{type:String}
    age: Number,
    major: String,
    money: {
        TWD: Number,
        USD: Number,
    },
});

const Student = mongoose.model("Student", studentSchema);

// app.get("/", async (req, res) => {
//     try {
//         let data = await Student.find().exec();
//         res.send(data);
//         console.log(data);
//     } catch (e) {
//         console.log(e);
//     }
// });

app.get("/", async (req, res) => {
    try {
        let data = await Student.findOne({ name: "Mario" }).exec();
        res.send(data);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
});

Student.find({})
    .exec()
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(4000, () => {
    console.log("Listening prot 4000...");
});

// "C"RUD
// const newObj = new Student({
//     name: "Roy",
//     age: 30,
//     major: "Math",
//     money: {
//         TWD: 6000,
//         USD: 7000,
//     },
// });
// newObj
//     .save()
//     .then((saveObj) => {
//         console.log("Data has been storage");
//         console.log(saveObj);
//     })
//     .catch((e) => {
//         console.log(e);
//     });
