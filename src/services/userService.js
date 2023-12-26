const { v4: uuid } = require('uuid');
const User = require('../database/Users');

const getAllUsers = () => {
    const allUsers = User.getAllUsers();
    // *** ADD ***
    return allUsers;
};

const getOneUser = () => {
    return;
};

const createNewUser = (newUser) => {
    // *** ADD ***
    const UserToInsert = {
        ...newUser,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', {
            timeZone: 'Europe/Moscow',
        }),
        updatedAt: new Date().toLocaleString('en-US', {
            timeZone: 'Europe/Moscow',
        }),
    };
    // *** ADD ***
    const createdUser = User.createNewUser(
        UserToInsert
    );

    return createdUser;
};
const updateOneUser = () => {
    return;
};

const deleteOneUser = () => {
    return;
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};