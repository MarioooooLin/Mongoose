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
    age: { type: Number, min: [0, "Age cannot less than 0"] }, //Number,
    major: String,
    money: {
        TWD: Number,
        USD: Number,
    },
});

const Student = mongoose.model("Student", studentSchema);

// Student.findOneAndUpdate({ name: "Liya" }, { name: "Liya Tsai" }, { runValidators: true, new: true })
//     .exec()
//     .then((newData) => {
//         console.log(newData);
//     });

Student.findOneAndUpdate({ name: "Liya Tsai" }, { name: "Liya " }, { runValidators: true, new: false })
    .exec()
    .then((newData) => {
        console.log(newData);
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

// C"R"UD
// app.get("/", async (req, res) => {
//     try {
//         let data = await Student.find().exec();
//         res.send(data);
//         console.log(data);
//     } catch (e) {
//         console.log(e);
//     }
// });

// app.get("/", async (req, res) => {
//     try {
//         let data = await Student.findOne({ name: "Mario" }).exec();
//         res.send(data);
//         console.log(data);
//     } catch (e) {
//         console.log(e);
//     }
// });

// Student.find({})
//     .exec()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// CR"U"D
// let newStudent = new Student({
//     name: "John",
//     age: -30,
//     major: "Art",
//     money: {
//         TWD: 1000,
//         USD: 2000,
//     },
// });

// let newStudent = new Student({
//     name: "John",
//     age: 30,
//     major: "Art",
//     money: {
//         TWD: 1000,
//         USD: 2000,
//     },
// });

// newStudent.save().then((data) => {
//     console.log("Success");
// });

// Student.updateOne({ name: "Liya" }, { age: 49 }, { runValidators: true })
//     .exec()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// Student.find({})
//     .exec()
//     .then((data) => {
//         console.log(data);
//     });
