const Event = require("../../models/Event");

const putEvent= async(req,res)=>{
    const { name, image,description,date} = req.body
    const { _id } = req.params;
    try {
        const event= await Event.findById({_id})
    
        if(!event) res.status(404).send("event not found");
        else{
            await Event.updateOne({_id}, {name: name?name:event.name, image:image?image:event.image, description:description?description:event.description, date:date?date:event.date})
            
            res.send("activity edited successfully")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {putEvent}