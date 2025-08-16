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
        const allServers = await Server.find();
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

module.exports =
{
    createServer,
    getAllServers,
    getServer,
    updateServer,
    deleteServer
}