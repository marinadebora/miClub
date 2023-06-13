const Activity = require('../../models/Activity');
const User = require('../../models/User');


const postActivity = async (req, res) => {
    const { activityName, daysAndSchedule, institution, phone, address,_id} = req.body;

    try {
        let lookFor = await User.findById(_id)

        if(lookFor){
            const create = await Activity.create({ activityName, daysAndSchedule, institution, phone, address,user:lookFor._id })
            const activity = await User.findOneAndUpdate({_id},{
                Activity:[],
                $push:{
                    activity: create
                }
            })
            res.send('Activity created successfully').json(create)
        }else{
            res.status(404).send("user not found")
        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postActivity }
