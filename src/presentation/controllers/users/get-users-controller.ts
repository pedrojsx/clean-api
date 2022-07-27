import { FindAllUsers } from '@/data/protocols/user/user-protocols'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class GetUsersController implements Controller {
  constructor (
    private readonly findUsers: FindAllUsers
  ) { }

  @ErrorHandler()
  async handle (request: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.findUsers.findAll()
    return httpResponse ? ok(httpResponse) : badRequest(new Error('Não foram encontrados usuários'))
  }
}
