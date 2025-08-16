const DM = require("../models/DM");

async function createDm(req, res)
{
    try
    {
        const ceatedDm = await DM.create(req.body);
        res.status(201).json(ceatedDm);
    } 
    catch (error)
    {
        res.status(500).json({ error: err.message });
    }
}

async function getDm(req,res) {
    try {
        const singleDm = await DM.findById(req.params.id);
                res.status(201).json(singleDm);
    } catch (error) {
                res.status(500).json({ error: err.message });

    }
}

async function  getAllDm(req,res) {
    try {
        const AllDm = await DM.find();
        res.status(201).json(AllDm);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}
module.exports={
    createDm,
    getDm,
    getAllDm
}