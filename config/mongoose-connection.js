const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')("development: mongoose");


// mongoose.connect(`${config.get("MONGODB_URI")}/Bag-app`)
mongoose.connect("mongodb+srv://SagnikMaity:sagnik123@cluster0.1p6ey.mongodb.net/")
.then(function (){
    // console.log("Connected to Mongo")
    dbgr("connected");
})
.catch(function (err) {
    dbgr(err)
})


module.exports = mongoose.connection