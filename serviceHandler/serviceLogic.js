const serviceDb = require("./serviceDb");
const Hashes = require("jshashes");
const SHA256 = new Hashes.SHA256();
const jwt = require("jsonwebtoken");

async function login(userLogin) {
    let userData = await serviceDb.login(userLogin.email);
    const encryptPassword = SHA256.hex(userLogin.password);
    if(userData.length > 0){
        if (userData[0].password !== undefined) {
            if (encryptPassword === userData[0].password) {
              let tokenData = {
                userId: userData[0].id,
              };
              const token = jwt.sign({ tokenData }, `${process.env.TOKEN_SECRET_KEY}`);
              let successfulLogin = { token, name: userData.name };
          
              return successfulLogin;
            } else {
              throw new Error("Failed to connect");
            }
          }
    }
   
  }

  module.exports = {
    login
  }
