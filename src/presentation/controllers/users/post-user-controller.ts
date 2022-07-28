import { InsertUser } from '@/data/protocols/user/user-protocols'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class PostUsersController implements Controller {
  constructor (
    private readonly createUser: InsertUser
  ) { }

  @ErrorHandler()
  async handle (request: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.createUser.insert(request.body)
    return httpResponse ? ok(httpResponse) : badRequest(new Error('Não foi possível criar o usuário'))
  }
}
