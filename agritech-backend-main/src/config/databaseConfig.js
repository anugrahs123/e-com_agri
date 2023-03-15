const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/agri";
mongoose.connect(mongoUrl, { autoIndex: true }, (error) => {
    if (!error) {
        console.log('mongodb connection established successfully');
    } else {
        console.log(error);
    }
});
