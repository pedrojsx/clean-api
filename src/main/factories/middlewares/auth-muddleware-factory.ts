import { middlewareHandler } from '@/main/adapters/express/express-middleware-adapter'
import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware'
import { Middleware } from '@/presentation/protocols'
import { jwtAdapter } from '../adapters/jwt/jwt-factory'

const makeAuthMiddlewareFactory = (): Middleware => {
  return new AuthMiddleware(jwtAdapter)
}

export const authMiddleware = middlewareHandler(makeAuthMiddlewareFactory())
