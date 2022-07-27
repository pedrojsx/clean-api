import { BusinessError } from '@/domain/errors/business-error'
import { Controller, HttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const routeHandler = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      queryParams: request.query,
      pathParams: request.params,
      headers: request.headers,
      body: request.body,
      userAuth: request.userAuth
    }

    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.body?.error instanceof BusinessError) {
      response.status(httpResponse.statusCode).json({ error: httpResponse.body.error.message })
    } else {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    }
    return httpResponse
  }
}
