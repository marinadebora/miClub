const User = require('../../models/User')
const bcrip = require('bcrypt')

const postUser = async (req, res) => {
  const { firsName, LastName, email, password, isTeacher, profilePhoto } = req.body

  try {
    const errorUser = await User.findOne({ email })
    if (errorUser) {
      res.send('user already exists')
    } else if (!firsName && !LastName && !email && !password) {
      res.send('some data is missing')
    } else {
      const passwordHash = await bcrip.hash(password, 10)
      const create = await User.create({ firsName, LastName, email, password: passwordHash, isTeacher, profilePhoto })
      res.json(create)
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { postUser }
