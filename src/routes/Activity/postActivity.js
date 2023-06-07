const Activity = require("../../models/Activity");


const postActivity = async(req,res)=>{
    const {activityName,daysAndSchedule,institution,phone,address}= req.body;

    try {
        let create = await Activity.create({activityName,daysAndSchedule,institution,phone,address})
        res.send("activity created successfully").json(create)
    } catch (error) {
        console.log(error)
    }
};
module.exports = {postActivity}