const jwt = require('jsonwebtoken');
const Authorization = require('../schemas/authorization.schema');

const generateJWT = ( id = '' ) => {
    return new Promise( (resolve, reject ) => {

        const payload = { id };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn : '4h'    
        }, async ( err, token ) => {
            if( err ){
                console.log(err);
                reject( 'Error generating the JWT' );
            }else{ 
                try {
                    const saveToken = new Authorization({token});
                    await saveToken.save();

                    resolve( token );
                } catch (error) {
                    console.log(error);
                    reject('Error saving the token');
                }
            }
        });

    });
}

 module.exports = {
    generateJWT
 }