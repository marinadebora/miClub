const Event = require('../../models/Event')

const deletEvent = async (req, res) => {
    const { _id } = req.params
    try {
        if (_id) await Event.deleteOne({ _id })
        res.send('delete successfully')
    } catch (error) {
        console.log(error)
    }

};

module.exports = { deletEvent }
