const Event = require('../../models/Event')


const getEvent = async (req, res) => {
    const { _id }=req.params
    try {
        if(_id){
            const lookFor = await Event.findById(_id)
            const response = lookFor ? lookFor: "Event not found"
            res.json(response)
        }else{
            const event = await Event.find()
            res.json(event) 
        }
        
    } catch (error) {
        console.log(error)
    }
};

module.exports = { getEvent }
