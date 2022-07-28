import { InsertUser } from '@/data/protocols/user/user-protocols'
import { CreateUser } from '@/data/use-cases/user/insert-user'
import { userRepository } from '../../repository/user-repository-factory'

const makeCreateUserFactory = (): InsertUser => {
  return new CreateUser(userRepository)
}

export const createUser = makeCreateUserFactory()
