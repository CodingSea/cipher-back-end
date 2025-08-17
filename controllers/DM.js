const DM = require("../models/DM");

async function createDM(req, res)
{
    try
    {
        const ceatedDM = await DM.create(req.body);
        if (ceatedDM)
        {
            res.status(201).json(ceatedDM);
        } else
        {
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: err.message });
    }
}

async function getDM(req, res)
{
    try
    {
        const singleDM = await DM.findById(req.params.id);
        if (singleDM)
        {

            res.status(200).json(singleDM);
        }
        else
        {
            res.status(204);
        }
    } catch (error)
    {
        res.status(500).json({ error: err.message });

    }
}

async function getAllDM(req, res)
{
    try
    {
        const AllDM = await DM.find();
        if (AllDM.length)
        {
            res.status(200).json(AllDM);

        } else
        {
            res.status(204);
        }
    } catch (error)
    {
        res.status(500).json({ error: err.message });
    }
}
module.exports = {
    createDM,
    getDM,
    getAllDM
}