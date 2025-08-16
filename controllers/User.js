const User = require("../models/User");
async function createUser(req, res)
{
    try
    {
        const createdUser = await User.create(req.body);
        res.status(201).json(createdUser);
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
        res.status(200).json(updatedUser);
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
        res.status(200).json(allUserInfo);
    } 
    catch (error)
    {
        res.status(500).json({ error: error.message });
    }

}
module.exports = {
    createUser,
    updateUser: updateUser,
    allUsers: allUsers
}