const express = require('express')
require('dotenv').config()
const notRoute = require('./routes/notlar')
const mongoose = require('mongoose')    

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.use('/api/notlar',notRoute);