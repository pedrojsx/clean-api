import { UserProtocols } from '@/data/protocols/user/user-protocols'
import { UserRepository } from '@/infra/db/repository/user-repository'

const makeUserRepositoryFactory = (): UserProtocols => {
  return new UserRepository()
}

export const userRepository = makeUserRepositoryFactory()
