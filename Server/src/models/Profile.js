const { Schema, model } = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')


const profileSchema = new Schema({
    imageLogo: String,
    imageFontPage: String,
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: false,
    versionKey: false //para que no aprezca el __v
})

profileSchema.plugin(findOrCreate)
module.exports = model("Profile", profileSchema)
