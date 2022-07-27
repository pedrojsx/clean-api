import { routeHandler } from '@/main/adapters/express/express-route-adapter'
import { PostLoginController } from '@/presentation/controllers/login/post-login-controller'
import { Controller } from '@/presentation/protocols'
import { logUser } from '../../use-cases/login/login-factory'

const makePostLoginControllerFactory = (): Controller => {
  return new PostLoginController(logUser)
}

export const postLoginController = routeHandler(makePostLoginControllerFactory())
