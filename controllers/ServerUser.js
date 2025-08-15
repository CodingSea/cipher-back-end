const ServerUser = require("../models/ServerUser");

async function createServerUser(req, res) {
    try {
        const createdUserUser = await ServerUser.create(req.body)
        res.status(201).json(createdUserUser)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function AllServerUsers(req, res) {
    try {
        const allServerUserInfo = await ServerUser.find()
        res.status(201).json(allServerUserInfo)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function ServerUserInfo(req, res) {
    try {
        const singleServerUserInfo = await ServerUser.findById(req.params.id)
        res.status(201).json(singleServerUserInfo)

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function UpdateServerUser(req, res) {
    try {
        const UpdatedServerUser = await ServerUser.findById(req.params.id, req.body, { new: true })
        res.status(201).json(UpdatedServerUser)

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    AllServerUsers,
    createServerUser,
    ServerUserInfo,
    UpdateServerUser
}