import { Router } from 'express'
import { postLoginController } from '../factories/controllers/login/post-login-controller-factory'
import { getUsersController } from '../factories/controllers/user/get-users-controller-factory'
import { postUserController } from '../factories/controllers/user/post-user-controller-factory'
import { authMiddleware } from '../factories/middlewares/auth-muddleware-factory'

export default (router: Router): void => {
  router.post('/login', postLoginController)
  router.get('/users', authMiddleware, getUsersController)
  router.post('/user', postUserController)
}
