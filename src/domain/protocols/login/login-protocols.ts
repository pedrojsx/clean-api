import { LoginModel } from '@/domain/models/login/login-model'

export interface LoginProtocol {
  login: (params: LoginModel.Input) => Promise<LoginModel.Output>
}
