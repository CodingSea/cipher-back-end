const User = require("../models/User");
const cloudinary = require('cloudinary').v2;
const multer = require("multer");

async function handleUpload(file)
{
    const res = await cloudinary.uploader.upload(file,
        {
            resource_type: "auto",
        });
    return res;
}

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

        /*
        if(updatedUser.profileImage)
        {
            cloudinary.uploader.destroy(updatedUser.profileImageId, function(error, result)
            {
                console.log(result, error);
            });
        }*/

        console.log(req.file);

        /*
        if (req.file)
        {
            // taken from the internet
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            const cldRes = await handleUpload(dataURI);

            updatedUser.profileImage = cldRes.secure_url;
            updatedUser.profileImageId = cldRes.public_id;
        }

        await updatedUser.save();

        */

        if (updatedUser)
        {
            res.status(200).json(updatedUser);
        } else
        {
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
        if (allUserInfo.length)
        {
            res.status(200).json(allUserInfo);
        } else
        {
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
        if (userInfo)
        {
            res.status(200).json(userInfo)
        } else
        {
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