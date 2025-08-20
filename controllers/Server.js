const { channel } = require("diagnostics_channel");
const Message = require("../models/Message");
const Server = require("../models/Server");

async function createServer(req, res)
{
    try
    {
        const createdServer = await Server.create(req.body);
        res.status(201).json(createdServer);
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

async function getAllServers(req, res)
{
    try
    {
        const allServers = await Server.find({ "users.user": req.user.id });
        if (allServers.length)
        {
            res.status(200).json(allServers);
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

async function getServer(req, res)
{
    try
    {
        const server = await Server.findById(req.params.id);
        if (server)
        {
            res.status(200).json(server);
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

async function updateServer(req, res)
{
    try
    {
        const updatedServer = await Server.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedServer)
        {
            res.status(200).json(updatedServer);
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

async function deleteServer(req, res)
{
    try
    {
        const server = await Server.findByIdAndDelete(req.params.id);
        res.status(200).json(server);
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}


// Channel

async function createChannel(req, res)
{
    try
    {
        const server = await Server.findById(req.params.serverId);
        server.channels[server.channels.length] = req.body;
        await server.save();
        res.status(201).json(server.channels);
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

async function getAllChannelsInServer(req, res)
{
    try
    {
        const allChannels = await Server.findById(req.params.serverId);

        if (allChannels.channels.length)
        {
            res.status(200).json(allChannels.channels);
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
        const Channel = await Server.findById(req.params.serverId).channels.findById(req.params.id);
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
        const server = await Server.findById(req.params.serverId);
        const updatedChannel = server.channels.id(req.params.id);
        updatedChannel.title = req.body.title;
        await server.save();
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
        const server = await Server.findById(req.params.serverId);
        const channelIndex = server.channels.findIndex(channel => channel._id === req.params.id);
        server.channels.splice(channelIndex, 1);
        await server.save();
        res.status(200).json(server.channels);
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}

// Messages

async function createChannelMessage(req, res)
{
    try
    {
        const createdMessage = await Message.create(req.body);
        const selectedServer = await Server.findById(req.params.serverId);
        const Channel = selectedServer.channels.find((x) =>
        {
            return x._id == req.params.id;
        })
        Channel.messages.push(createdMessage);

        await Channel.save();
        await selectedServer.save();

        if (createdMessage)
        {
            res.status(201).json(createdMessage)
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

async function getChannelMessages(req, res)
{
    try
    {
        const selectedServer = await Server.findById(req.params.serverId);
        const Channel = selectedServer.channels.find((x) =>
        {
            return x._id == req.params.id;
        })
        
        const messages = await Message.find({ _id: { $in: Channel.messages } }).sort({createdAt: 1}).populate("user");

        if (messages)
        {
            res.status(200).json(messages)
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

module.exports =
{
    createServer,
    getAllServers,
    getServer,
    updateServer,
    deleteServer,
    createChannel,
    getAllChannelsInServer,
    getChannel,
    updateChannel,
    deleteChannel,
    createChannelMessage,
    getChannelMessages
}