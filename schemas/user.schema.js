const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name : {
        type : String,
        required : [true, 'name is required']
    },
    email : {
        type : String,
        required : [true, 'email is required'],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'password is required']
    },
    deleted : {
        type : Boolean,
        required : true,
        default : false
    }
},{
    timestamps : true
});

userSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
}

userSchema.pre('save', async function () {
    const hash = await bcrypt.hashSync(this.password, 10);
    this.password = hash;
})

module.exports = model( 'User' , userSchema);