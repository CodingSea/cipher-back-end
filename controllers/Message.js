const Message = require('../models/Message')


async function createMessage(req, res)
{
    try
    {
        const createdMessage = await Message.create(req.body);
        if (createMessage)
        {
            res.status(201).json(createdMessage)
        } else
        {
            res.status(204);

        }

    } catch (error)
    {
        res.status(500).json({ error: err.message })
    }
}


async function getAllMessages(req, res)
{
    try
    {
        const AllMessage = await Message.find();
        if (AllMessage.length)
        {
            res.status(200).json(AllMessage)
        } else
        {
            res.status(204);

        }
    } catch (error)
    {
        res.status(500).json({ error: err.message })
    }
}

async function getMessage(req, res)
{
    try
    {
        const MessageInfo = await Message.findById(req.params.id);
        if (MessageInfo)
        {
            res.status(200).json(MessageInfo);
        } else
        {
            res.status(204);
        }
    } catch (error)
    {
        res.status(500).json({ error: err.message })
    }
}

async function deleteMessage(req, res)
{
    try
    {
        const deletedMessage = await Message.findByIdAndUpdate(req.params.id);
        if (deleteMessage)
        {
            res.status(200).json(deletedMessage);
        } else
        {
            res.status(204);
        }
    } catch (error)
    {
        res.status(500).json({ error: err.message })

    }
}

async function updateMessage(req, res)
{
    try
    {
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(updateMessage){
        res.status(200).json(updatedMessage);
        }else{
           res.status(204); 
        }
    } catch (error)
    {

    }
}

module.exports = {
    createMessage,
    getAllMessages,
    getMessage,
    deleteMessage,
    updateMessage
}