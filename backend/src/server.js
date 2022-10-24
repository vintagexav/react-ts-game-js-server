import app from './index.js'
const port = process.env.PORT || 8080 // consider load env with dotenv
app.listen(port, () => { console.log(`Magic happens on port ${port}`)})
