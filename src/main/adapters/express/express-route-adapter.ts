import { Controller, HttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const routeHandler = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      queryParams: request.query,
      pathParams: request.params,
      headers: request.headers,
      body: request.body,
      userAurh: request.userAuth
    }

    const httpResponse = await controller.handle(httpRequest)
    response.status(httpResponse.statusCode).json({ data: httpResponse.body })
    return httpResponse
  }
}
