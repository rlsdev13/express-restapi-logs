const mongoose = require('mongoose');

const dbConnection = async() => {
    try{

       await mongoose.connect(process.env.MONGODB_CNN, {
           useNewUrlParser : true,
           useUnifiedTopology : true,
       });

       console.log('database connection successful \n');

    }catch(error){
        console.log(error);
        throw new Error('DB error',error);

    }

}

module.exports = {
    dbConnection
}