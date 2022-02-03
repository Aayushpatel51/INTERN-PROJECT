const express = require('express')
const cors = require('cors')
const port = 5000;
const routesUrls = require('./routes/routes')
const mongoose = require('mongoose');
// const connectToMongo = require('./db');
const dotenv = require('dotenv');
const app = express()

// connectToMongo();

dotenv.config();

mongoose.connect(process.env.USERDATA, ()=> console.log('Connected'))
app.use(express.json())
app.use(cors()) 
app.use("/app", routesUrls)


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
  