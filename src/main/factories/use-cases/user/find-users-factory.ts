import { FindAllUsers } from '@/data/protocols/user/user-protocols'
import { FindUsers } from '@/data/use-cases/user/find-users'
import { userRepository } from '../../repository/user-repository-factory'

const makeFindUsersFactory = (): FindAllUsers => {
  return new FindUsers(userRepository)
}

export const findUsers = makeFindUsersFactory()
