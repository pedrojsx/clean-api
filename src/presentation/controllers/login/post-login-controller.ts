import { LoginProtocol } from '@/domain/protocols/login/login-protocols'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class PostLoginController implements Controller {
  constructor (
    private readonly loginUser: LoginProtocol
  ) { }

  @ErrorHandler()
  async handle (request: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.loginUser.login(request.body)

    return httpResponse ? ok(httpResponse) : badRequest(new Error('Usuário e/ou senha incorretos'))
  }
}
