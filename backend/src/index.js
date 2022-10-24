import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import routes from './routes/index.js';
 const app = express()

app.use(cors())
app.use((req, res, next) => { res.setHeader('X-Powered-By', 'Xavi'); next()})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes(app)      // Router comes before static
app.use('/', routes);
export default app;
