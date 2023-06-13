const Profile = require("../../models/Profile")

const getProfile = async(req,res)=>{
  const { _id } = req.params
try {
  if(_id){
    const lookFor = await Profile.findById(_id)
    let profile = lookFor ? lookFor : "Profile not found"
    res.json(profile)
  }else{
    const profiles = await Profile.find()
    res.json(profiles)
  }
  
} catch (error) {
  console.log(error)
}
}
module.exports = {getProfile}