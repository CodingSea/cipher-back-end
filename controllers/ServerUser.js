const ServerUser = require("../models/ServerUser");

async function createServerUser(req,res) {
     try {
        const createdUserUser = await ServerUser.create(req.body)
        res.status(201).json(createdUserUser)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function AllServerUsers(req,res) {
    try {
        const allServerUserInfo = await ServerUser.find()
        res.status(201).json(allServerUserInfo)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}



module.exports = {
    AllServerUsers,
    createServerUser
}