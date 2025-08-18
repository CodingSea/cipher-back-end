const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { register } = require("module");
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
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body

    // check if username taken
    const existing = await User.findOne({ username })
    if (existing) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 8)

    // create user
    const newUser = new User({ username, passwordHash })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}

// POST /auth/login
exports.login = async (req, res) => {
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
    res.status(500).json({ message: 'Server error' })
  }
}
module.exports = {
    createUser,
    updateUser,
    allUsers,
    getUser
}