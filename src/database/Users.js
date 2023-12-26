const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllUsers = () => {
    return DB.users;
};

const createNewUser = (newUser) => {
    
    const isAlreadyAdded =
        DB.users.findIndex(
            (users) => users.name === newUser.name
        ) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.users.push(newUser);
    saveToDatabase(DB);
    
    return newUser;
};

module.exports = {
    getAllUsers,
    createNewUser,
};
