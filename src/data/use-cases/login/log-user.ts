import { LoginModel } from '@/domain/models/login/login-model'
import { LoginProtocol } from '@/domain/protocols/login/login-protocols'

export class LogUser implements LoginProtocol {
  async login (params: LoginModel.Input): Promise<LoginModel.Output> {
    return {
      email: `${params.email}`,
      dateLogin: new Date()
    }
  }
}
