const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
var nm = require('nodemailer')

// Import the User schema from "./mongo"
const User = require("./mongo");

mongoose
    .connect("mongodb://localhost:27017/pro")
    .then(() => {
        console.log("mongodb connected (app.js)");
    })
    .catch((err) => {
        console.error("Connection failed:", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json())

// Route to handle GET request
app.get("/", cors(), (req, res) => {
    // Add your logic here if needed
    res.send("Hello World!");
});
app.post('/verify', async (req, res) => {
    const { random } = req.body
    const { email } = req.body
    console.log(random)
    let trans = nm.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'rudrakshbchavda@gmail.com',
            pass: 'dlerdqccxvloppnd',
        },
    });

    var mailoption = {
        from: 'rudrakshbchavda@gmail.com',
        to: email,
        subject: 'Your verification code',
        text: random.toString()
    }
    trans.sendMail(mailoption, (err, info) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(info)
        }
    })
})

// Route to handle POST request for login
app.post("/signin", async (req, res) => {
    const { email } = req.body;


    try {
        const user = await User.findOne({ email: email });
        if (user) {
            // You may perform password comparison here if needed
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

// Route to handle POST request for signup
app.post("/signup", async (req, res) => {
    const { email, password, FirstName, LastName } = req.body;

    try {
        const check = await User.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            const newUser = new User({
                email: email,
                password: password,
                FirstName: FirstName,
                LastName: LastName
            });

            await newUser.save();
            res.json("success");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.listen(8000, () => {
    console.log("Server listening on port 8000");
});