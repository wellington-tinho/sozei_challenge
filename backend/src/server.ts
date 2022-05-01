// const cors = require('cors')	
import cors from 'cors';
import express from 'express';
import { routes } from './routes';



const APP_PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
// app.use('/api-docs', swagger.serve)
// app.get('/tools', swagger.setup(swaggerConfig))

app.listen(APP_PORT, () => console.log(`Server  running in http://localhost:${APP_PORT}`))