const { Schema, model } = require('mongoose')
const findOrCreate = require('mongoose-findorcreate')

const activitySchema = new Schema({
    activityName: { type: String, require: true, lowercase: true },
    daysAndSchedule: { type: Array, require: true },
    institution: { type: String, require: true, lowercase: true },
    phone: { type: Array },
    address: { type: String, require: true },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  
}, {
    timestamps: false,
    versionKey: false //para que no aprezca el __v
})

activitySchema.plugin(findOrCreate);
module.exports = model("Activity", activitySchema)
