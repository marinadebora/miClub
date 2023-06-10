const Event = require('../../models/Event')


const getEvent = async (req, res) => {
    try {
        const lookFor = await Event.find()
        res.send(lookFor)
    } catch (error) {
        console.log(error)
    }
};

module.exports = { getEvent }
