const app = require('./src/app')
require('dotenv').config()

const port = process.env.PORT || 3000
app.listen(port, () =>
{
    console.log(`server listening on port ${port}`)
})