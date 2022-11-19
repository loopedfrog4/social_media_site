require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
// app.use(express.json())

const corsOptions ={
    origin:'http://localhost:5000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const mongodbURL = "mongodb://localhost:27017/socialMediaDB";

mongoose.connect(mongodbURL);

const thoughtSchema = {
    text: String
};

const Thought = mongoose.model("Thought", thoughtSchema);

app.get("/", (req,res) => {
    
    Thought.find({}, (err, result) => {
        res.json(result);
    });
    
});

app.post("/createThought", (req, res) => {

    const userThought = req.body.thoughtInput;
    console.log(userThought);
    const thought = new Thought({
        text: userThought
    });

    thought.save(err => {
        if (!err) { 
            console.log("Created");
            res.redirect("/");
        } else {
            console.log("Err while creating thought");
        }
    })
    
});

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});