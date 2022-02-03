const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type: 'string',
        required: true,
    },
    detail:{
        type:'string',
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    }
});

const User = mongoose.model('user', userSchema); 
module.exports = User;