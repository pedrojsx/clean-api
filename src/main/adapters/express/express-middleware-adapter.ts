import { HttpRequest, Middleware } from '@/presentation/protocols'
import { Request, Response, NextFunction } from 'express'

export const middlewareHandler = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = { headers: request.headers, userAuth: request.userAuth }
    const { statusCode, body } = await middleware.handle(httpRequest)
    if (statusCode === 200) {
      Object.assign(request, body)
      next()
    } else {
      response.status(statusCode).json({ error: body.error.message })
    }
  }
}
