const Activity = require('../../models/Activity')


const getActivity = async (req, res) => {
  const { activityName } = req.params;
  try {
    let name;
    if (activityName) {
      name = await Activity.find({ activityName })
    } else {
      name = await Activity.find()
    }
    res.json(name)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getActivity }
