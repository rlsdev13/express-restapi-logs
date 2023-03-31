const { Schema, model } = require('mongoose');

const authorizationSchema = new Schema({
    token : {
        type : String,
        required : [true, 'Token is required']
    }
},
{
    timestamps : true
});

module.exports = model('Authorization', authorizationSchema);