const Activity = require('../../models/Activity')

const putActivity = async (req, res) => {
    const { activityName,category, daysAndSchedule, institution, phone, address,city } = req.body
    const { _id } = req.params;
    try {
        let activity = await Activity.findById({ _id })
        if (!activity) res.status(404).send('activity not found')
        else {
            await Activity.updateOne({ activityName: activityName ? activityName : activity.activityName,category:category?category:activity.category, daysAndSchedule: daysAndSchedule ? daysAndSchedule : activity.daysAndSchedule, institution: institution ? institution : activity.institution, phone: phone ? phone : activity.phone, address: address ? address : activity.address,city:city?city:activity.city });
            res.send('activity edited successfully')
        }


    } catch (error) {
        console.log(error)
    }

};
module.exports = { putActivity }
