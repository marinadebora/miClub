const Profile = require("../../models/Profile")
const User = require("../../models/User")

const postProfile = async (req, res) => {
  try {
    const { imageLogo, imageFontPage, _id } = req.body
    const lookFor = await User.findById(_id)
    if (lookFor) {
      const createProfile = await Profile.create({ imageLogo, imageFontPage, user: lookFor._id })
      console.log(createProfile)
      const edit = await User.findOneAndUpdate({ _id }, {
        Profile: [],
        $push: {
          profile:createProfile
        }
      })
      res.send('Profile created successfully').json(createProfile)
    } else {
      res.status(404).send("user not found")
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = { postProfile }
