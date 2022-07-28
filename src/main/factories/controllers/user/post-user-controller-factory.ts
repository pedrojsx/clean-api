import { routeHandler } from '@/main/adapters/express/express-route-adapter'
import { PostUsersController } from '@/presentation/controllers/users/post-user-controller'
import { Controller } from '@/presentation/protocols'
import { createUser } from '../../use-cases/user/inser-user-factory'

const makePostUserControllerFactory = (): Controller => {
  return new PostUsersController(createUser)
}

export const postUserController = routeHandler(makePostUserControllerFactory())
