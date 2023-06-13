const Activity = require('../../models/Activity')


const getActivity = async (req, res) => {
  const { _id } = req.params;
  try {
    let name;
    if (_id) {
      name = await Activity.findById(_id)
    } else {
      name = await Activity.find()
    }
    res.json(name)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getActivity }
