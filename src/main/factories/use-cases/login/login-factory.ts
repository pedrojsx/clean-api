import { LogUser } from '@/data/use-cases/login/log-user'
import { LoginProtocol } from '@/domain/protocols/login/login-protocols'
import { userRepository } from '../../repository/user-repository-factory'

const makeLoginFactory = (): LoginProtocol => {
  return new LogUser(userRepository)
}

export const logUser = makeLoginFactory()
