const mongoose = require('mongoose');


connect = async () => {
    await mongoose.connect('mongodb://localhost/Todo_List');
    console.log("mongo connected");
}

module.exports = connect;