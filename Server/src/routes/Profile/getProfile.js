const Profile = require("../../models/Profile")

const getProfile = async(req,res)=>{
  const { id } = req.params
try {
  if(id){
    const lookFor = await Profile.findById(id)
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