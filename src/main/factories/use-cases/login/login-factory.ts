import { LogUser } from '@/data/use-cases/login/log-user'
import { LoginProtocol } from '@/domain/protocols/login/login-protocols'
import { jwtAdapterFactory } from '../../adapters/jwt/jwt-factory'
import { userRepository } from '../../repository/user-repository-factory'

const makeLoginFactory = (): LoginProtocol => {
  return new LogUser(userRepository, jwtAdapterFactory)
}

export const logUser = makeLoginFactory()
