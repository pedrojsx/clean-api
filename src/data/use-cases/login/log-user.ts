import { UserProtocols } from '@/data/protocols/user/user-protocols'
import { LoginModel } from '@/domain/models/login/login-model'
import { LoginProtocol } from '@/domain/protocols/login/login-protocols'

export class LogUser implements LoginProtocol {
  constructor (
    private readonly userRepository: UserProtocols
  ) { }

  async login (params: LoginModel.Input): Promise<LoginModel.Output> {
    const user = await this.userRepository.findOne(params.email)

    return {
      email: user?.email,
      dateLogin: new Date()
    }
  }
}
