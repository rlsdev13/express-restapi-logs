const jwt = require('jsonwebtoken');
const User = require('../schemas/user.schema');
const { request } = require('express')

const validateJwt = async (req = request, res, next) => {
    let token = req.headers.authorization?.toString();

    if( !token || !token.startsWith("Bearer ")){
        return res.status(401).json({
            msg:"Unauthorized"
        });
    }

    token = token.substring(7, token.length);

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
        return res.status(401).json({
            msg : "Unauthorized"
        });
    }
}

module.exports = validateJwt;