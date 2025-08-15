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
        const updatedUser = await User.findByIdAndUpdate
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function AllUsers(req, res) {
    try {
        const allUserInfo = await User.find()
        res.status(201).json(allUserInfo)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }

}

async function userInfo(req, res) {
    try {
        const singleUser = await User.findById(req.params.id)
        res.status(201).json(singleUser)

    } catch (error) {

    }

}
module.exports = {
    createUser,
    UpdateUser,
    AllUsers,
    userInfo
}