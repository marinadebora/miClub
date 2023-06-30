const { Schema, model } = require('mongoose')
const findOrCreate = require('mongoose-findorcreate')


const userSchema = new Schema({
    firsName: { type: String, require: true, lowercase: true },
    LastName: { type: String, require: true, lowercase: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isTeacher: { type: Boolean, default: false },
    profilePhoto: { type:  Array, default: ["https://res.cloudinary.com/deqbqghhq/image/upload/v1688125751/profiledefautl_malkwa.png"] },
    favorites:{type: Array,defaukt:[]},
    activity: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
    event: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    profile:[{type:Schema.Types.ObjectId, ref:'Profile'}]
}, {
    timestamps: false,
    versionKey: false //para que no aprezca el __v
})

userSchema.plugin(findOrCreate);
module.exports = model("User", userSchema)
