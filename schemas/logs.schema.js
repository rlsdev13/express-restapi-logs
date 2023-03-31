const { Schema, model } = require('mongoose');

const logSchema = new Schema({
    application_id : {
        type : Schema.Types.ObjectId,
        ref : 'Application',
        required : true
    },
    type : {
        type : String,
        enum : ['error','info','warning'],
        required : [true, 'type is required']
    },
    priority : {
        type : String,
        enum : ['lowest', 'low', 'medium', 'high', 'highest'],
        required : [true, 'priority is required']
    },
    path : {
        type : String,
        required : [true, 'path is required']
    },
    message : {
        type : String,
        required : [true, 'message is required']
    },
    request : {
        data : {
            type : {},
            required : [true, 'request.data is required']
        },
        response : {
            type : {},
            required : [true, 'request.response is required']
        },
    },
    deleted : {
        type : Boolean,
        default : false,
        required : true
    }
},
{
    timestamps : true
});

module.exports = model('Log',logSchema);
