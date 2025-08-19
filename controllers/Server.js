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
        const allServers = await Server.find({"users.user": req.user.id});
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
        const updatedChannel = await Server.findById(req.params.serverId).channels.findByIdAndUpdate(req.params.id, req.body);
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
        const Channel = await Server.findById(req.params.serverId).channels.findByIdAndDelete(req.params.id);;
        res.status(200).json(Channel);
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
    deleteChannel
}