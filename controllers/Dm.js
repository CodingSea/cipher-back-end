const DM = require("../models/DM");

async function createDM(req, res)
{
    try
    {
        const ceatedDM = await DM.create(req.body);
        res.status(201).json(ceatedDM);
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
       if(singleDM){
       
        res.status(200).json(singleDM);}
        else{
            
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
        res.status(200).json(AllDM);
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