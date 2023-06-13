const Activity = require('../../models/Activity');
const User = require('../../models/User');


const postActivity = async (req, res) => {
    const { activityName, daysAndSchedule, institution, phone, address,_id} = req.body;

    try {
        let buscar = await User.findById(_id)
        console.log(buscar)
        if(buscar){
            const create = await Activity.create({ activityName, daysAndSchedule, institution, phone, address,user:buscar._id })
            const modificar = await User.findOneAndUpdate({_id},{
                Activity:[],
                $push:{
                    activity: create
                }
            })
            res.send('activity created successfully').json(create)
        }else{
            res.status(404).send("user not found")
        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postActivity }
