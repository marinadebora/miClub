const User = require('../../models/User')
const bcrip = require('bcrypt')

const logInUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) res.send('Username does not exist')
    else {
      const login = bcrip.compareSync(password, user.password)
      console.log(login)
      if (login) {
        res.send(`welcome ${user.firsName}!!!`)
      } else {
        res.send('Incorrect password')
      }
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = { logInUser }
