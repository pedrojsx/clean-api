import { FindAllUsers } from '@/data/protocols/user/user-protocols'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class GetUsersController implements Controller {
  constructor (
    private readonly findUsers: FindAllUsers
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.findUsers.findAll()
    return {
      statusCode: 200,
      body: httpResponse
    }
  }
}
