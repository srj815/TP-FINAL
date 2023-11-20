const User = require("../models/userModel");
const bcrypt = require('bcrypt')

const createUser = async (user) =>{
    const hashedPassword = await bcrypt.hash(user.contrasena, 10)
    user.role = 'user'
    user.contrasena = hashedPassword
    const newUser = new User(user)
    return await newUser.save()
}

const getUser = async () =>{
    return await User.findById(userId);
} 

const verifyExistUser = async () =>{
    const existingUser = await User.findOne({ username });
    return !!existingUser;
}

module.exports = {getUser, verifyExistUser, createUser}