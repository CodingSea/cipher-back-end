const Message = require('../models/Message')


async function createMessage(req, res) {
    try {
        const createdMessage = await Message.create(req.body)
        res.status(201).json(createdMessage)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}


async function getAllMessages(req, res) {
    try {
        const AllMessage = await Message.find()
        res.status(200).json(AllMessage)
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function getMessage(req, res) {
    try {
        const MessageInfo = await Message.findById(req.params.id)
        res.status(200).json(MessageInfo)

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

async function deleteMessage(req, res) {
    try {
        const deletedMessage = await Message.findByIdAndUpdate(req.params.id)
        res.status(201).json(deletedMessage)
    } catch (error) {
        res.status(500).json({ error: err.message })

    }
}

async function updateMessage(req,res) {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json(updatedMessage)
    } catch (error) {
        
    }
}

module.exports = {
    createMessage,
    getAllMessages,
    getMessage,
    deleteMessage,
    updateMessage
}