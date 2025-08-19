const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET  =  process.env.SECRET;
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


// POST /auth/register
const register = async (req, res) => {
  try {
    const { username, password, email } = req.body

    // check if username taken
    const existing = await User.findOne({ username })
    if (existing) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 8)

    // create user
    const newUser = new User({ username, email, passwordHash })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ err })
  }
}

// POST /auth/login
const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const isValid = await user.validatePassword(password)
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const payload = {
      id: user._id
      // Add anything else that you want to put into the JWT token here
    }
    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' }) //Look at the docs for more 'expires in' options
    res.json({ token })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server error' })
  }
}
module.exports = {
    createUser,
    updateUser,
    allUsers,
    getUser,
    register,
    login
}