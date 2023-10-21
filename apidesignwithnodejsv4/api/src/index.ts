import dotenv from 'dotenv'
dotenv.config()
import config from './config'
import app from './server'

app.listen(3001, () => {
  console.log(`hello on http://localhost:${config.port}`)
})
