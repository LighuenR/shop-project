const UserSchema = require("../models/usersModels");

const registerUser = async(req, res, next) => {
    const { name , email, mobile, password } = req.body;
    const user = await UserSchema.findOne({email});
    if(user) {
        res.status(403).json({message: `Usuario ${email} ya existe`});
    }
    const _newUser = new UserSchema({name, email, mobile, password})
    try {
        const user = await _newUser.save();
        res.status(201).json(user)
    } catch (error) {
        next(error);
    }
}

const loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserSchema.findOne({email});
    if(!user) {
        res.status(403).json({message: "usuario no registrado"})
    }
    try {
        res.status(200).json({message: `Usuario ${email} logueado correctamente`, user})
    } catch (error) {
        console.log("Error")
    }
}

module.exports = {
    registerUser,
    loginUser
}