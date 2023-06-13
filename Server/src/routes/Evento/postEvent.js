const Event = require('../../models/Event');
const User = require('../../models/User');

const postEvent = async (req, res) =>
{
    const { name, image, description, date,hour,_id } = req.body
    try {
        let lookFor = await User.findById(_id)
        if(lookFor){
            let event = await Event.create({ name, image, description, date,hour,user:lookFor._id });
            let edit = await User.findOneAndUpdate({_id},{
                Event:[],
                $push:{
                    event,
                }
            })
            res.send('Event created successfully').json(event)

        }else{
            res.status(404).send("user not found")
        }
        
    } catch (error) {
        console.log(error)
    }



}

module.exports = { postEvent }
