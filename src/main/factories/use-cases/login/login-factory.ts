import { LogUser } from '@/data/use-cases/login/log-user'
import { LoginProtocol } from '@/domain/protocols/login/login-protocols'
import { jwtAdapter } from '../../adapters/jwt/jwt-factory'
import { userRepository } from '../../repository/user-repository-factory'

const makeLoginFactory = (): LoginProtocol => {
  return new LogUser(userRepository, jwtAdapter)
}

export const logUser = makeLoginFactory()
