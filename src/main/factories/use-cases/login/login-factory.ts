import { LogUser } from '@/data/use-cases/login/log-user'
import { LoginProtocol } from '@/domain/protocols/login/login-protocols'

const makeLoginFactory = (): LoginProtocol => {
  return new LogUser()
}

export const logUser = makeLoginFactory()
