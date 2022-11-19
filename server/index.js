require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
// app.use(express.json())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const mongodbURL = "mongodb://localhost:27017/fashionDB";

mongoose.connect(mongodbURL);

const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", itemSchema);

app.get("/", (req, res) => {
    const url = "";
});

app.post("/search", (req, res) => {
    const userSearchQuery = req.body.name;

    const item = new Item({
        name: userSearchQuery
    });

    item.save(err => {
        if (!err) { 
            console.log("Searching...");
            res.redirect("/");
        } else {
            console.log("Err while fetching");
        }
    })
    
});

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});