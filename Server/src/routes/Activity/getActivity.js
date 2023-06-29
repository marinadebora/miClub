const Activity = require('../../models/Activity')


const getActivity = async (req, res) => {
  const { _id } = req.params;
  let obj={
    sport:[],
    education:[],
    jobs:[],
    others:[]
  }

  try {
    let name;
    if (_id) {
      name = await Activity.findById(_id)
    } else {

      name = await Activity.find()
    name?.map(e=> e?.category === "deporte"? obj.sport.push(e):e?.category === "educacion"?obj.education.push(e):e?.category === "oficio"? obj.jobs.push(e):obj.others.push(e))

      res.json(obj)
    }
    //res.json(name)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getActivity }
