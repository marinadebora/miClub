const User = require('../../models/User')

const getUser = async (req, res) => {
  const { id } = req.params
  try {
    if(id){
      const userId = await User.findById(id)
      let response = userId ? userId : "user not found"
      res.json(response)
    }else{
      const users = await User.find()
      res.json(users)
    }
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getUser }
