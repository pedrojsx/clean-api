export interface HttpRequest {
  queryParams?: any
  pathParams?: any
  body?: any
  headers?: any
  userAuth?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
