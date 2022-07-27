import { routeHandler } from '@/main/adapters/express/express-route-adapter'
import { GetUsersController } from '@/presentation/controllers/users/get-users-controller'
import { Controller } from '@/presentation/protocols'
import { findUsers } from '../../use-cases/user/find-users-factory'

const makeGetUsersControllerFactory = (): Controller => {
  return new GetUsersController(findUsers)
}

export const getUsersController = routeHandler(makeGetUsersControllerFactory())
