import { Router } from 'express'
import controllers from './controllers'

const router = Router()

router
  .get('/test', controllers.getTest)
  .post('/auth/login', controllers.signin)
  .get('/auth/user', controllers.getUserAdmin)
  .post('/post/add', controllers.addPost)
  .get('/post/get/all', controllers.getAllPosts)
  .get('/post/get/:id', controllers.getOnePost)
export default router