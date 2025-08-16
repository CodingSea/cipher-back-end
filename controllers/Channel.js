const Channel = require("../models/Channel");

async function createChannel(req, res)
{
    try
    {
        const createdChannel = await Channel.create(req.body);
        res.status(201).json(createdChannel);
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

async function getAllChannels(req, res)
{
    try
    {
        const allChannels = await Channel.find();
        if (allChannels.length)
        {
            res.status(200).json(allChannels);
        }
        else
        {
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

async function getChannel(req, res)
{
    try
    {
        const Channel = await Channel.findById(req.params.id);
        if (Channel)
        {
            res.status(200).json(Channel);
        }
        else
        {
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

async function updateChannel(req, res)
{
    try
    {
        const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedChannel)
        {
            res.status(200).json(updatedChannel);
        }
        else
        {
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

async function deleteChannel(req, res)
{
    try
    {
        const Channel = await Channel.findByIdAndDelete(req.params.id);
        res.status(200).json(Channel);
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

module.exports =
{
    createChannel,
    getAllChannels,
    getChannel,
    updateChannel,
    deleteChannel
}