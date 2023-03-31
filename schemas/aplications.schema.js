const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
    },
    deleted : {
        type : Boolean,
        default : false,
        required : true
    }
},
{
    timestamps: true, //createdAt-updatedAt
});

module.exports = model('Application', aplicationSchema);