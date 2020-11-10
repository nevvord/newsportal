import { Router } from 'express'
import controllers from './controllers'

const router = Router()

router
  .get('/test', controllers.getTest)
  .post('/signin', controllers.signin)

export default router