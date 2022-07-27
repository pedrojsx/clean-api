import { Router } from 'express'
import { postLoginController } from '../factories/controllers/login/post-login-controller-factory'
import { getUsersController } from '../factories/controllers/user/get-users-controller-factory'

export default (router: Router): void => {
  router.get('/users', getUsersController)
  router.post('/login', postLoginController)
}
