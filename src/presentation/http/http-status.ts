import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols'

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: { data: data ?? {} }
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: { error: error }
})

export const serverError = (error: ServerError): HttpResponse => ({
  statusCode: 500,
  body: { error: error }
})
