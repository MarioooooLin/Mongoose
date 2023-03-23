const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose
    .connect("mongodb://127.0.0.1:27017/exampleDB") //Need to use 127.0.0.1,localhost might defeat.
    .then(() => {
        console.log("Connect mongoDB successfully...");
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(4000, () => {
    console.log("Listening prot 4000...");
});
