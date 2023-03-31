const bcrypt = require('bcryptjs');
const User = require('../schemas/user.schema');
const { generateJWT } = require('../helpers/jwt.helper');


class AuthController{

    async login( req, res, next ){
        const { email , password } = req.body;
    
        try {
            const user = await User.findOne({ email, deleted : false });
    
            if( !user ){
                return res.status(400).json({
                    msg : "Wrong username or password"
                });
            }
    
            const validatePassword = bcrypt.compareSync( password, user.password );
    
            if ( !validatePassword ) {
                return res.status(400).json({
                    msg : "Wrong username or password"
                });
            }        
    
            const token = await generateJWT( user.id );
    
            res.json({
                token,
                user
            });
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg : "Internal server error"
            });
        };
    };

}


module.exports = new AuthController();