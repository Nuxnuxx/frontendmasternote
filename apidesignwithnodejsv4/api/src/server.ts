import express from 'express'
import morgan from 'morgan'
import router from './router'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res, next) => {
  setTimeout(() => {
    next(new Error('hello'))
  },1)
})

app.use('/api', protect, router)
app.use('/user', createNewUser)
app.use('/signin', signin)

app.use((err, req, res, next) => {
  if (err.type === 'auth'){
    res.status(401).json({meesage: 'unauthorized'})
  } else if (err.type === 'input') {
    res.status(400).json({meesage: 'invalid input'})
  } else {
    res.status(500).json({meesage: 'oops, that on us'})
  }
})

export default app
