const { Schema, model } = require('mongoose');

const authorizationSchema = new Schema({
    application_id : {
        type : Schema.Types.ObjectId,
        ref : 'Aplication',
        required : true
    },
    token : {
        type : String,
        required : [true, 'Token is required']
    }
},
{
    timestamps : true
});

module.exports = model('Authorization', authorizationSchema);