const User = require("../models/User");
async function createUser(req, res) {
    try {
        const createdUser = await User.create(req.body)
        res.status(201).json(createdUser)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}


async function UpdateUser(req, res) {
    try {
        const updatedUser=await User.findByIdAndUpdate
    } catch (error) {

    }
}

module.exports(
    createUser
)