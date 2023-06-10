const Activity = require('../../models/Activity')

const putActivity = async (req, res) => {
    const { activityName, daysAndSchedule, institution, phone, address } = req.body
    const { _id } = req.params;
    try {
        let activity = await Activity.findById({ _id })
        if (!activity) res.status(404).send('activity not found')
        else {
            await Activity.updateOne({ activityName: activityName ? activityName : activity.activityName, daysAndSchedule: daysAndSchedule ? daysAndSchedule : activity.daysAndSchedule, institution: institution ? institution : activity.institution, phone: phone ? phone : activity.phone, address: address ? address : activity.address });
            res.send('activity edited successfully')
        }


    } catch (error) {
        console.log(error)
    }

};
module.exports = { putActivity }
