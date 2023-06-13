const { Schema, model } = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')


const eventSchema = new Schema({
    name: { type: String, require: true, lowercase: true },
    image: String,
    description: { type: String },
    date: { type: String, require: true },
    hour:{type: String, require: true},
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: false,
    versionKey: false //para que no aprezca el __v
})

eventSchema.plugin(findOrCreate)
module.exports = model("Event", eventSchema)
