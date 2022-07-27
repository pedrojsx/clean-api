import { LoginProtocol } from '@/domain/protocols/login/login-protocols'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class PostLoginController implements Controller {
  constructor (
    private readonly loginUser: LoginProtocol
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.loginUser.login(request.body)

    return {
      statusCode: httpResponse.email ? 200 : 400,
      body: httpResponse || {}
    }
  }
}
