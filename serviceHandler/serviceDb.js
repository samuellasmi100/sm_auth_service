const dbConnection = require("../db/connection-wrapper");
const authQuery = require("../sql/query/authQuery");


async function login(email) {
    let sql = authQuery.getOne()
    let parameters = [email];
    let userData = await dbConnection.executeWithParameters(sql, parameters);   
    
    return userData;
}





module.exports = {
    login,
};
