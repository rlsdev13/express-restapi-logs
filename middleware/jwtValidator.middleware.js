const jwt = require('jsonwebtoken');
const User = require('../schemas/user.schema');

const validateJwt = async (req, res, next) => {
    let token;

    if (authHeader.startsWith("Bearer ")){
        token = authHeader.substring(7, authHeader.length);
    } else {
        return res.status(401).json({
            msg:"Unauthorized"
        });
    }
 
    try {
        const {id} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const userAuth = await User.findById(id, { deleted : false });

        if( !userAuth ){
            return res.status(401).json({
                msg : "Unauthorized"
            });
        }

        req.userAuthenticated = userAuth;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg : "Unauthorized"
        });
    }
}

module.exports = {
    validateJwt
}