const  jwt = require('jsonwebtoken');

exports.generateToken = (userInfo)=>{
    const payLoad = {
        userName:userInfo.userName,
    }

    const token = jwt.sign(payLoad, process.env.TOKEN, {
        expiresIn: "7days",
    });
    return token;
}
