// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute.js");
const postRouter = require("./routes/postRoute.js");

// Dotenv configuration
const dotenv = require("dotenv");
dotenv.config();

// Constants
const mongoUrl = process.env.MONGO_URL
const app = express()
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors())
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

// Connect to Database and start Listening
mongoose.connect(mongoUrl).then(()=>{
    app.listen(port, () => {
        console.log(`Connected to Database and Listening on Port ${port}`);
    })
}).catch((err)=>{
    console.log("Error while connecting to database");
})

