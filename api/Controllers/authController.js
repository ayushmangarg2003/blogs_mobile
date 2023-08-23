// Imports
const User = require('../Models/UserModel.js')

// Trying to register
const register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await User.register(name, email, password)
    res.status(200).json({ email })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// Trying to Login by checking password
const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.login(email, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// Exporting Functions
module.exports = {
  login, register
}