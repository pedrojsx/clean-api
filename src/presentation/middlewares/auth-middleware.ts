import { JwtProtocols } from '@/data/protocols/jwt/jwt-protocol'
import { BusinessError } from '@/domain/errors/business-error'
import { HttpRequest, HttpResponse, Middleware } from '@/presentation/protocols'
import { ServerError } from '../errors/server-error'
import { UnauthorizedError } from '../errors/unauthorized-error'
import { serverError, unauthorized } from '../http/http-status'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly jwtAdapter: JwtProtocols
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { authorization } = request.headers
      if (!authorization) {
        return unauthorized(new UnauthorizedError('Token de acesso não informado'))
      }

      const bearerToken = authorization.split(' ')
      const [, token] = bearerToken

      const userAuth = await this.jwtAdapter.validateToken(token)
      if (!userAuth) {
        return unauthorized(new UnauthorizedError('Token de acesso inválido ou expirado'))
      }

      return {
        statusCode: 200,
        body: { userAuth }
      }
    } catch (error) {
      if (error instanceof BusinessError) {
        return unauthorized(error)
      }
      return serverError(new ServerError(error))
    }
  }
}
