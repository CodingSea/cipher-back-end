const User = require("../models/User");
async function createUser(req, res)
{
    try
    {
        const createdUser = await User.create(req.body);
        if (createUser)
        {
            res.status(201).json(createdUser);
        } else
        {
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
}


async function updateUser(req, res)
{
    try
    {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(updatedUser){
            res.status(200).json(updatedUser);
        }else{
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: error.message });
    }
}

async function allUsers(req, res)
{
    try
    {
        const allUserInfo = await User.find();
        if(allUserInfo.length){
            res.status(200).json(allUserInfo);
        }else{
            res.status(204);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: error.message });
    }

}

async function getUser(req, res)
{
    try
    {
        const userInfo = await User.findById(req.params.id);
        if(userInfo){
            res.status(200).json(userInfo)
        }else{
            res.status(204);
        }

    } catch (error)
    {
        res.status(500).json({ error: err.message })
    }
}
module.exports = {
    createUser,
    updateUser,
    allUsers,
    getUser
}