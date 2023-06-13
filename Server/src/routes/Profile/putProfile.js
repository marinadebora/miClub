const Profile = require("../../models/Profile");

const putProfile = async(req,res)=>{
  const { imageLogo, imageFontPage } = req.body
  const { _id } = req.params;
  try {
    const profile = await Profile.findById(_id)
    if(!profile){
     res.status(404).send('profile not found')
    }else{
       await Profile.updateOne({_id},{imageLogo:imageLogo?imageLogo:profile.imageLogo,imageFontPage:imageFontPage?imageFontPage:profile.imageFontPage})
      res.send('Profile edited successfully')
    }
    
  } catch (error) {
    
  }
}
module.exports = {putProfile}