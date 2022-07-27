import { UserRepository } from '@/infra/db/repository/user-repository'

const makeUserRepositoryFactory = (): UserRepository => {
  return new UserRepository()
}

export const userRepository = makeUserRepositoryFactory()
