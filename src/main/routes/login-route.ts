import { Router } from 'express'
import { postLoginController } from '../factories/controllers/login/post-login-controller-factory'

export default (router: Router): void => {
  router.post('/login', postLoginController)
}
