const mongoose = require('mongoose')
require('dotenv').config()
const {MONGO} = process.env

const databass = async () =>
{

    try {
        const db = await mongoose.connect(MONGO)
        console.log('DB connected to', db.connect.name)
    } catch (error) {
        console.log(error)
    }

}
databass()
