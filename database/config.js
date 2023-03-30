const mongoose = require('mongoose');

const dbConnection = async() => {
    try{

       await mongoose.connect(process.env.MONGODB_CNN, {
           useNewUrlParser : true,
           useUnifiedTopology : true,
       });

       console.log('db ok!!');

    }catch(error){
        console.log(error);
        throw new Error('DB error',error);

    }

}

module.exports = {
    dbConnection
}